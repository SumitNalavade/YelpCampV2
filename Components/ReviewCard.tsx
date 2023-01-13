import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { FaTrash } from "react-icons/fa";

import { IReview } from "../utils/interfaces";
import { deleteReview } from "../utils/controllers/reviewController";

interface Props {
  review: IReview;
}

const ReviewCard: React.FC<Props> = ({ review }) => {
  const router = useRouter()
  const { data: session } = useSession()

  const handleDeleteReview = async() => {
    await deleteReview(review.id)

    router.push(`/campgrounds/${review.campgroundId}`)
  }

  return (
    <div className="card card-compact my-6 grid grid-cols-12 gap-4 items-center">
      <img src={review.user!.image!} className="bg-primary w-8 rounded-2xl place-content-center" />
        <div className="w-full col-span-11 flex items-center justify-between">
          <div>
            <p className="font-medium">{review.user!.name}</p>
            <p className="col-span-11">{review.body}</p>
          </div>
          { session ? <FaTrash onClick={handleDeleteReview} color="red" /> : "" }
        </div>
    </div>
  );
};

export default ReviewCard;
