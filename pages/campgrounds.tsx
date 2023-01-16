import React, { useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import { request, gql } from "graphql-request";

import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "../components/Layout";
import CampgroundCard from "../components/CampgroundCard";

import { ICampground } from "../utils/interfaces";
import { getCampgrounds } from "../utils/controllers/campgroundController";

interface Props {
  campgrounds: ICampground[];
}

const Campgrounds: NextPage<Props> = ({ campgrounds }) => {
  const [campgroundsState, setCampgroundsState] = useState(campgrounds)
  const [cursor, setCursor] = useState(campgroundsState[campgroundsState.length - 1].id);

  const getPaginatedCampgrounds = async () => {
    const campgrounds = await getCampgrounds(cursor)

    if(campgrounds[0]) {
      setCampgroundsState([...campgroundsState, ...campgrounds])
      setCursor(campgrounds[campgrounds.length - 1].id)
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">     
          <InfiniteScroll
            dataLength={campgroundsState.length}
            next={getPaginatedCampgrounds}
            hasMore={true}
            loader={<h4></h4>}
            className="flex flex-wrap justify-center"
          >
            {campgroundsState.map((campground) => (
            <Link key={campground.id} href={`/campgrounds/${campground.id}`}>
              <CampgroundCard campground={campground} />
            </Link>
          ))}
          </InfiniteScroll>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = gql`
    {
      campgrounds {
        id
        name
        primaryImageB64
        address
        price
      }
    }
  `;

  const { campgrounds } = await request(
    `${process.env.NEXT_PUBLIC_URL}/api/graphql`,
    query
  );

  return { props: { campgrounds } };
};

export default Campgrounds;
