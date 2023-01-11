import React from "react";

import { IReview } from "../utils/interfaces";

interface Props {
  review: IReview;
}

const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <div className="card card-compact my-6 grid grid-cols-12 gap-4 items-center">
      <img src={review.user.image!} className="bg-primary w-8 rounded-2xl place-content-center" />
        <div className="w-full col-span-11">
            <p className="font-medium">{review.user.name}</p>
            <p className="col-span-11">{review.body}</p>
        </div>
    </div>
  );
};

export default ReviewCard;
