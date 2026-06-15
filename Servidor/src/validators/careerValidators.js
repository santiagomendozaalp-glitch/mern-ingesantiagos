import { body, param, query } from 'express-validator';

export const careerIdValidation = [
  param('id').isMongoId().withMessage('Career id must be a valid MongoDB id')
];

export const listCareersValidation = [
  query('page').optional().isInt({ min: 1 }).withMessage('page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('limit must be between 1 and 100'),
  query('search').optional().isString().withMessage('search must be a string')
];

export const createCareerValidation = [
  body('name').trim().notEmpty().withMessage('name is required').isLength({ min: 2, max: 100 }).withMessage('name length must be between 2 and 100'),
  body('description').trim().notEmpty().withMessage('description is required').isLength({ min: 5, max: 1000 }).withMessage('description length must be between 5 and 1000'),
  body('field').trim().notEmpty().withMessage('field is required').isLength({ min: 2, max: 100 }).withMessage('field length must be between 2 and 100'),
  body('duration').notEmpty().withMessage('duration is required').isInt({ min: 1, max: 10 }).withMessage('duration must be between 1 and 10')
];

export const updateCareerValidation = [
  body('name').optional().trim().isLength({ min: 2, max: 100 }).withMessage('name length must be between 2 and 100'),
  body('description').optional().trim().isLength({ min: 5, max: 1000 }).withMessage('description length must be between 5 and 1000'),
  body('field').optional().trim().isLength({ min: 2, max: 100 }).withMessage('field length must be between 2 and 100'),
  body('duration').optional().isInt({ min: 1, max: 10 }).withMessage('duration must be between 1 and 10')
];
