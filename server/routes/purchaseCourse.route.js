import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { createPayment } from '../controllers/coursePurchase.controller.js';  // Correct named import

const router = express.Router();

router.route('/create-checkout-session').post(isAuthenticated, createPayment);
router.route('/webhook').post(express.raw);
router.route('/courses/:courseId/detail-with-status').get();

export default router;
