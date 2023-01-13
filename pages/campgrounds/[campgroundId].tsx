import { NextPage, GetServerSideProps } from "next";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import { request, gql } from "graphql-request";

import { ICampground } from "../../utils/interfaces";

import Layout from "../../Components/Layout";
import CampgroundImage from "../../Components/CampgroundImage";
import AverageCampgroundRating from "../../Components/AverageCampgroundRating";
import ReviewCard from "../../Components/ReviewCard";

interface Props {
  campground: ICampground;
}

const CampgroundPage: NextPage<Props> = ({ campground }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const deleteCampground = async() => {
    const deleteCampgroundMutation = gql`
      mutation deleteCampground($id: String!) {
        deleteCampground(id: $id) {
          name
          id
        }
      }
    `

  await request('http://localhost:3000/api/graphql', deleteCampgroundMutation, {
    id: campground.id
  })

  router.push(`/campgrounds`)

  }

  return (
    <Layout>
      <div className="container mx-auto h-screen ">
        <div className="mx-2 mb-6">
          <p className="text-3xl font-medium">{campground.name}</p>
          <p>{campground.address}</p>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="mx-2 flex justify-center max-h-[30rem]">
            <CampgroundImage imageUrl={campground.primaryImageB64} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {campground.secondaryImageB64s.map((imageUrl, index) => (
              <div className="max-h-60 w-full flex" key={index}>
                <CampgroundImage imageUrl={imageUrl} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full grid lg:grid-cols-2 place-content-around">
          <div className="my-6">
            <p>{campground.description}</p>

            {campground.reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          <div className="lg:mx-8">
            <div className="rounded-xl bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex justify-between">
                  <h2>
                    <span className="card-title inline text-2xl">
                      ${campground.price}{" "}
                    </span>
                    night
                  </h2>
                  <AverageCampgroundRating rating={campground.averageRating} />
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-lg">Posted by {campground.user.name}</p>
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={campground.user.image!} />
                    </div>
                  </div>
                </div>

                {session && campground.user.id != session.user.id ? (
                  <div className="pt-6">
                    <div className="rating rating-md">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-secondary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-secondary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-secondary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-secondary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                    </div>
                    <textarea
                      className="textarea textarea-bordered block w-full my-4"
                      rows={4}
                      placeholder="Review body"
                    ></textarea>
                    <button className="btn btn-secondary">Delete</button>
                  </div>
                ) : (
                  ""
                )}

                {session && campground.user.id === session.user.id ? (
                  <div className="pt-6">
                    <button className="btn btn-primary mx-2 text-white">Update Campground</button>
                    <button className="btn btn-secondary mx-2 text-white" onClick={deleteCampground}>Delete Campground</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { campgroundId } = context.query;

  const query = gql`
    query getCampground($id: String!) {
      campground(id: $id) {
        id
        name
        description
        averageRating
        primaryImageB64
        secondaryImageB64s
        address
        price
        user {
          id
          name
          image
        }
        reviews {
          rating
          body
          user {
            name
            image
          }
        }
      }
    }
  `;

  const campground = (
    await request("http://localhost:3000/api/graphql", query, {
      id: campgroundId,
    })
  )["campground"];

  return {
    props: {
      campground,
    },
  };
};

export default CampgroundPage;
