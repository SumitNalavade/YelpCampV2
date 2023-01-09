import { NextPage, GetServerSideProps } from "next";
import { request, gql } from "graphql-request";

import { ICampground } from "../../utils/interfaces";

import Layout from "../../Components/Layout";
import CampgroundImage from "../../Components/CampgroundImage";
import AverageCampgroundRating from "../../Components/AverageCampgroundRating";

interface Props {
    campground: ICampground
}

const CampgroundPage: NextPage<Props> = ({ campground }) => {
  return (
    <Layout>
      <div className="container mx-auto h-screen">
        <div className="bg-base-100">
            <div className="mx-2 mb-6">
                <p className="text-3xl font-medium">{campground.name}</p>
                <p>{campground.address}</p>
            </div>

            <div className="grid grid-cols-2">
                <div className="mx-2">
                    <CampgroundImage imageUrl={campground.primaryImageUrl} />
                </div>

                <div className="grid grid-cols-2 gap-2 place-content-center">
                    { campground.secondaryImageUrls.map((imageUrl) => (
                        <CampgroundImage key={campground.secondaryImageUrls.indexOf(imageUrl)} imageUrl={imageUrl} />
                    )) }
                </div>
            </div>

            <div className="w-full grid grid-cols-2 place-content-around">
                <div className="my-6">
                    <p>{campground.description}</p>
                </div>

                <div className="mx-20">
                    <div className="rounded-xl bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2><span className="card-title inline text-2xl">${campground.price} </span>night</h2>
                                <AverageCampgroundRating rating={campground.averageRating} />
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p className="text-lg">Posted by Ginger</p>
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                </div>
                                <textarea className="textarea textarea-bordered block w-full my-4" rows={4} placeholder="Review"></textarea>
                                <button className="btn btn-secondary">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async(context) => {
    const { campgroundId } = context.query

    const query = gql`
        query getCampground($id: String!) {
            campground(id: $id) {
                name
                description
                averageRating
                primaryImageUrl
                secondaryImageUrls
                address
                price
            }
        }
    `

    const campground = (await request("http://localhost:3000/api/graphql", query, { id: campgroundId }))["campground"]

    return {
        props: {
            campground
        }
    }
}

export default CampgroundPage;
