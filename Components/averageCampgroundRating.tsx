import React from "react";

interface Props {
    rating: number
}

const AverageCampgroundRating: React.FC<Props> = ({ rating }) => {
  const arr = Array.apply(null, Array(rating)).map(() => true)

  for(let i = 0; i < 5-rating; i++) {
    arr.push(false)
  }

  return (
    <div className="rating rating-sm">
      
      { arr.map((value, index) => (
        value ? (<input
        key={index}
          type="radio"
          name="rating-1"
          className="mask mask-star bg-neutral"
        />) : (<input key={index} type="radio" name="rating-1" className="mask mask-star" />)
      )) }
    </div>
  );
};

export default AverageCampgroundRating;
