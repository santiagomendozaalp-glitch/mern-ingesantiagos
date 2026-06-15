import { Router } from 'express';

import {
  createCareer,
  deleteCareer,
  getCareerById,
  getCareers,
  updateCareer
} from '../controllers/careerController.js';
import authenticate from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';
import validate from '../middlewares/validate.js';
import {
  createCareerValidation,
  listCareersValidation,
  careerIdValidation,
  updateCareerValidation
} from '../validators/careerValidators.js';

const router = Router();

router.use(authenticate);

router.get('/', listCareersValidation, validate, getCareers);
router.get('/:id', careerIdValidation, validate, getCareerById);
router.post('/', upload.single('image'), createCareerValidation, validate, createCareer);
router.put('/:id', careerIdValidation, updateCareerValidation, validate, upload.single('image'), updateCareer);
router.delete('/:id', careerIdValidation, validate, deleteCareer);

export default router;
