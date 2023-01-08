import { useState } from "react";
import { NextPage, GetServerSideProps } from "next";
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
            <div className="h-full">
                <div className="grid grid-cols-2 h-full">
                    <div className="max-h-screen overflow-y-auto">
                        { campgrounds.map((campground) => (
                            <div className="cursor-pointer" key={campgrounds.indexOf(campground)} onClick={() => setSelectedCampground(campground)}>
                                <CampgroundCard campground={campground} />
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-rows-2">
                        <div className="flex justify-center items-center">
                            Mapbox
                        </div>

                        <CampgroundInfoCard campground={selectedCampground} />
                    </div>
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