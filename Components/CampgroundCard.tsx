import React from "react";

import { ICampground } from "../utils/interfaces";

interface Props {
    campground: ICampground
}

const CampgroundCard: React.FC<Props> = ({ campground }) => {
  return (
    <div className="card card-compact lg:card-side bg-base-100 shadow-xl m-4 grid grid-cols-2">
      <figure className="flex flex-column">
        <img src={campground.imageUrl} alt="Album" className="w-full max-h-52 object-cover" />
      </figure>
      <div className="card-body overflow-y-hidden">
        <h2 className="card-title">{campground.name}</h2>
        <p className="max-h-10 text-sm">{campground.description}</p>
      </div>
    </div>
  );
};

export default CampgroundCard;