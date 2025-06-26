import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
}, { timestamps: true });

// Export the model
const Review = mongoose.model('Review', reviewSchema);
export default Review; // Use ES Module export
