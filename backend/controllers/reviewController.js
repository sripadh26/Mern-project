import Review from '../models/review.js'; // Ensure this path is correct

export const submitReview = async (req, res) => {
  const { name, email, review, rating } = req.body;

  try {
    const newReview = new Review({ name, email, review, rating });
    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting review', error });
  }
};
