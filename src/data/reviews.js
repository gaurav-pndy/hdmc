// reviewsData.js - Collect all reviews from doctors

import { doctorsData } from "./doctors";

// Function to extract all reviews from doctors data
export const getAllReviews = () => {
  const allReviews = [];

  doctorsData.forEach((doctor) => {
    if (doctor.reviews && Array.isArray(doctor.reviews)) {
      doctor.reviews.forEach((review) => {
        allReviews.push({
          ...review,
          doctorName: doctor.name, // Reference to which doctor this review is for
          doctorId: doctor.id,
          doctorImage: doctor.image,
        });
      });
    }
  });

  return allReviews;
};

// If reviews are stored as translation keys, you'll need to use this approach:
export const getReviewsTranslationKeys = () => {
  const reviewKeys = [];

  doctorsData.forEach((doctor) => {
    if (doctor.reviews && typeof doctor.reviews === "string") {
      // If reviews is a translation key like "doctors.doctorsList.doctor1.reviews"
      reviewKeys.push({
        translationKey: doctor.reviews,
        doctorName: doctor.name,
        doctorId: doctor.id,
        doctorImage: doctor.image,
      });
    }
  });

  return reviewKeys;
};
