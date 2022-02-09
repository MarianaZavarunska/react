import { FC, useEffect } from "react";

import { MovieReview } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllReviews } from "../../store/slices";

import "./MovieReviews.css";

const MovieReviews: FC<{ movieId: number }> = ({ movieId }) => {
  const { reviews } = useAppSelector((state) => state.moviesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllReviews(movieId));
  }, [movieId]);

  return (
    <div className="reviews-container">
      {reviews &&
        reviews.map((review) => (
          <MovieReview key={review.id} review={review} />
        ))}
    </div>
  );
};

export {MovieReviews};
