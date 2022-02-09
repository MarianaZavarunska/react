export interface IReviewResponse {
  id: number;
  // page: number,
  results: IReview[];
  // total_pages: number,
}

export interface IReview {
  author: string;
  content: string;
  created_at: string;
  id: number;
}
