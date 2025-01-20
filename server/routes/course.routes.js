import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { createCourse } from '../controller/course.controller.js';

const router = express.Router();

router.route('/create').post(isAuthenticated, createCourse); // Correctly use createCourse here

export default router;
