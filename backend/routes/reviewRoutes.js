import express from 'express';
import { submitReview } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', submitReview);

export default router;
