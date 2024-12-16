import React from 'react';
import { Star } from 'lucide-react';

export default function GoogleReviewButton() {
  return (
    <a
      href="https://g.page/r/CeDGfnrdDvitECA/review"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
      aria-label="Leave us a Google Review"
    >
      <Star className="text-yellow-500" size={20} />
      <span className="font-medium">Review us on Google</span>
    </a>
  );
}