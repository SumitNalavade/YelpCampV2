import { useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import { request, gql } from "graphql-request";

import Layout from "../Components/Layout";
import CampgroundCard from "../Components/CampgroundCard";
import CampgroundInfoCard from "../Components/CampgroundInfoCard";

import { campgrounds } from "../utils/placeholderData";
import { ICampground } from "../utils/interfaces";

interface Props {
    campgrounds: ICampground[]
}

const Campgrounds: NextPage<Props> = ({ campgrounds }) => {
    const [selectedCampground, setSelectedCampground] = useState<ICampground>(campgrounds[0])

    return (
        <Layout>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-around">
                    { campgrounds.map((campground) => (
                        <Link key={campground.id} href={`/campgrounds/${campground.id}`}>
                            <CampgroundCard campground={campground} />
                        </Link>
                    )) }
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
    const query = gql`
      {
        campgrounds {
          id
          name
          description
          imageURL
          address
          price
        }
      }
    `

    const { campgrounds } = await request('http://localhost:3000/api/graphql', query)

    return { props: { campgrounds } }
}

export default Campgrounds