import { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import { request, gql } from "graphql-request";

import Layout from "../components/Layout";
import CampgroundCard from "../components/CampgroundCard";

import { ICampground } from "../utils/interfaces";

interface Props {
  campgrounds: ICampground[];
}

const Campgrounds: NextPage<Props> = ({ campgrounds }) => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around">
          {campgrounds.map((campground) => (
            <Link key={campground.id} href={`/campgrounds/${campground.id}`}>
              <CampgroundCard campground={campground} />
            </Link>
          ))}
        </div>
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
