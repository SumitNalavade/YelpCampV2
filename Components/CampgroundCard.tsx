import React from "react";

import { ICampground } from "../utils/interfaces";

interface Props {
  campground: ICampground;
}

const CampgroundCard: React.FC<Props> = ({ campground }) => {
  return (
    <div className="card card-compact w-80 h-80 bg-base-100 m-4 z-50">
      <figure>
        <img src={campground.primaryImageUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="my-4">
        <h2 className="text-md font-medium">{campground.name}</h2>
        <p className="text-sm text-base-200">{campground.address}</p>
        <div className="badge badge-primary badge-outline mt-6">${campground.price}</div>
      </div>
    </div>
  );
};

export default CampgroundCard;
