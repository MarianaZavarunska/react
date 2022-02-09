import React, { FC } from "react";

import { IReview } from "../../interfaces/reviews.interface";
import "./MovieReview.css";

const MovieReview: FC<{ review: IReview }> = ({ review }) => {
  return (
    <div className="review-container">
      <div>{review.author}</div>
      <div className="review-date">
        {new Date(Date.parse(review.created_at)).getFullYear()}
      </div>
      <div>{review.content}</div>
    </div>
  );
};

export default MovieReview;
