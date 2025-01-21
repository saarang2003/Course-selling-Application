import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { createCourse, getCreatorCourse } from '../controller/course.controller.js';

const router = express.Router();

router.route('/create').post(isAuthenticated, createCourse); // Correctly use createCourse here
router.route('/').get(isAuthenticated , getCreatorCourse);

export default router;
