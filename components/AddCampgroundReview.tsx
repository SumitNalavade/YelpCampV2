import React, { useState } from "react";
import { useQuery } from "react-query";

// @ts-ignore
import StarRating from "react-star-ratings"

interface Props {
  addReview: (rating: number, body: string) => void
}

const AddCampgroundReview: React.FC<Props> = ({ addReview }) => {
  const [rating, setRating] = useState(0)
  const [body, setBody] = useState("")

  const { isFetching, refetch } = useQuery("addReview", () => addReview(rating, body), {
    refetchOnWindowFocus: false,
    enabled: false,
  })

  return (
    <div className="pt-6">
      <StarRating
        rating={rating}
        starRatedColor="gold"
        starHoverColor="gold"
        changeRating={(rating: number) => setRating(rating)}
        numberOfStars={5}
        name='rating'
        starDimension={"30px"}
        />
      <textarea
        className="textarea textarea-bordered block w-full my-4"
        rows={4}
        placeholder="Review body"
        value={body}
        onChange={(evt) => setBody(evt.target.value)}
      ></textarea>
      <button className={`btn btn-primary text-white ${ isFetching ? "loading disabled" : "" }`} onClick={() => refetch()}>
        Post Review
      </button>
    </div>
  );
};

export default AddCampgroundReview