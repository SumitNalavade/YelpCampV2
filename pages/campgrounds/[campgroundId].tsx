import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { request, gql } from "graphql-request";

import { ICampground } from "../../utils/interfaces";

// @ts-ignore
import StarRating from "react-star-ratings";

import Layout from "../../components/Layout";
import CampgroundImage from "../../components/CampgroundImage";
import AddCampgroundRating from "../../components/AddCampgroundRating";
import ReviewCard from "../../components/ReviewCard";

import { deleteCampground } from "../../utils/controllers/campgroundController";
import { addReview } from "../../utils/controllers/reviewController";

interface Props {
  campground: ICampground;
}

const CampgroundPage: NextPage<Props> = ({ campground }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleDeleteCampground = async () => {
    await deleteCampground(campground.id);

    router.push(`/campgrounds`);
  };

  const handleAddReview = async (rating: number, body: string) => {
    const { campgroundId } = await addReview(
      rating,
      body,
      session?.user.id!,
      campground.id
    );

    router.push(`/campgrounds/${campgroundId}`);
  };

  const getAverageRating = () => {
    if (campground.reviews.length == 0) return 0;

    const totalRating = campground.reviews.reduce(
      (accr, curr) => accr + curr.rating,
      0
    );

    return totalRating / campground.reviews.length;
  };

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
                  <StarRating
                    rating={getAverageRating()}
                    starRatedColor="black"
                    numberOfStars={5}
                    name="rating"
                    starDimension={"10px"}
                  />
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-lg">Posted by {campground.user.name}</p>
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={campground.user.image!} />
                    </div>
                  </div>
                </div>

                {session &&
                campground.user.id != session.user.id &&
                !campground.reviews.find(
                  (review) => review.user.id === session?.user.id
                ) ? (
                  <AddCampgroundRating addReview={handleAddReview} />
                ) : (
                  ""
                )}

                {session && campground.user.id === session.user.id ? (
                  <button
                    className="btn btn-secondary btn-sm max-w-xs mt-6 text-white"
                    onClick={handleDeleteCampground}
                  >
                    Delete Campground
                  </button>
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
          id
          rating
          body
          campgroundId
          user {
            id
            name
            image
          }
        }
      }
    }
  `;

  const campground = (
    await request(`${process.env.NEXT_PUBLIC_URL}/api/graphql`, query, {
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
