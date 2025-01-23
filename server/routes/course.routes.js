import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { createCourse, createLecture, editCourse, getCourseById, getCourseLecture, getCreatorCourse } from '../controller/course.controller.js';
import upload from '../utils/multer.js';

const router = express.Router();

router.route('/create').post(isAuthenticated, createCourse); // Correctly use createCourse here
router.route('/').get(isAuthenticated , getCreatorCourse);
router.route('/:courseId').put(isAuthenticated , editCourse , upload.single('courseThumbnail'))
router.route('/:courseId').get(isAuthenticated , getCourseById)
router.route('/:courseId/lecture').post(isAuthenticated , createLecture)
router.route('/:courseId/lecture').get(isAuthenticated , getCourseLecture)


export default router;
