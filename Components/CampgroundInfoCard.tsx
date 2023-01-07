import React from "react";

import { ICampground } from "../utils/interfaces";

interface Props {
  campground: ICampground;
}

const CampgroundInfoCard: React.FC<Props> = ({ campground }) => {
  return (
    <div className="bg-base-100 shadow-md">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="card-body grid grid-cols-2">
        <div>
          <h2 className="card-title">{campground.name}</h2>
          <p className="max-h-8">{campground.address}</p>
          <div className="badge badge-primary badge-outline">${campground.price}</div>
        </div>

        <div>
          { campground.description }
        </div>
       
      </div>
    </div>
  );
};

export default CampgroundInfoCard;
