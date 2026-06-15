import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import path from 'node:path';

import Career from '../models/Career.js';
import asyncHandler from '../utils/asyncHandler.js';
import AppError from '../utils/appError.js';
import { HTTP_STATUS } from '../utils/httpCodes.js';

const removeImageFile = async (imagePath) => {
  if (!imagePath) {
    return;
  }

  const relativeImagePath = imagePath.replace(/^\/+/, '');
  const absoluteImagePath = path.join(process.cwd(), relativeImagePath);

  try {
    await fs.unlink(absoluteImagePath);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn(`Failed to remove image file: ${absoluteImagePath}`);
    }
  }
};

export const createCareer = asyncHandler(async (req, res) => {
  const image = req.file ? `/uploads/${req.file.filename}` : '';
  const career = await Career.create({
    ...req.body,
    image,
    createdBy: req.user.userId
  });

  return res.status(HTTP_STATUS.CREATED).json({
    success: true,
    message: 'Career created successfully',
    data: career
  });
});

export const getCareers = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const search = req.query.search || '';

  const filters = {
    createdBy: new mongoose.Types.ObjectId(req.user.userId)
  };

  if (search) {
    filters.$or = [
      { name: { $regex: search, $options: 'i' } },
      { field: { $regex: search, $options: 'i' } }
    ];
  }

  const [careers, total] = await Promise.all([
    Career.find(filters).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Career.countDocuments(filters)
  ]);

  return res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'Careers fetched successfully',
    data: careers,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  });
});

export const getCareerById = asyncHandler(async (req, res, next) => {
  const career = await Career.findOne({
    _id: req.params.id,
    createdBy: req.user.userId
  });

  if (!career) {
    return next(new AppError('Career not found', HTTP_STATUS.NOT_FOUND));
  }

  return res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'Career fetched successfully',
    data: career
  });
});

export const updateCareer = asyncHandler(async (req, res, next) => {
  const payload = { ...req.body };
  if (req.file) {
    payload.image = `/uploads/${req.file.filename}`;
  }

  const career = await Career.findOne({
    _id: req.params.id,
    createdBy: req.user.userId
  });

  if (!career) {
    const existsWithId = await Career.exists({ _id: req.params.id });
    if (existsWithId) {
      return next(new AppError('You are not allowed to update this career', HTTP_STATUS.FORBIDDEN));
    }
    return next(new AppError('Career not found', HTTP_STATUS.NOT_FOUND));
  }

  Object.assign(career, payload);
  await career.save();

  return res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'Career updated successfully',
    data: career
  });
});

export const deleteCareer = asyncHandler(async (req, res, next) => {
  const career = await Career.findOne({
    _id: req.params.id,
    createdBy: req.user.userId
  });

  if (!career) {
    const existsWithId = await Career.exists({ _id: req.params.id });
    if (existsWithId) {
      return next(new AppError('You are not allowed to delete this career', HTTP_STATUS.FORBIDDEN));
    }
    return next(new AppError('Career not found', HTTP_STATUS.NOT_FOUND));
  }

  await removeImageFile(career.image);
  await career.deleteOne();
  return res.status(HTTP_STATUS.NO_CONTENT).send();
});
