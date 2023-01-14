import React, { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useQuery } from "react-query";
import { useRouter } from 'next/router'
import { getSession, useSession } from "next-auth/react";

import Layout from "../../components/Layout";
import Dropzone from "../../components/Dropzone";

import { addCampground } from "../../utils/controllers/campgroundController";

const NewCampground: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [primaryImages, setPrimaryImages] = useState<File[]>([]);
  const [secondaryImages, setSecondaryImages] = useState<File[]>([]);

  const { isFetching, refetch } = useQuery("addCampground", async () => {
    const { id } = await addCampground(name, description, primaryImages, secondaryImages, address, Number(price), session!.user.id!)

    router.push(`/campgrounds/${id}`) 
  }, {
    refetchOnWindowFocus: false,
    enabled: false,
  })

  return (
    <Layout>
      <div className="mx-6 md:grid grid-cols-2 gap-10 h-full">
      <div>
          <div className="mb-10 hidden md:block">
            <p className="text-3xl font-medium">What does this location looks like?</p>
            <p>Upload a primary image and some supporting images</p>
          </div>
          <div className="mb-16 w-full">
            <Dropzone
              multiple={false}
              text={"Upload Primary Image"}
              setFile={setPrimaryImages}
              uploadedFiles={primaryImages!}
            />
          </div>
          <div className="h-full w-full">
            <Dropzone
              multiple={true}
              text={"Upload Secondary Images"}
              setFile={setSecondaryImages}
              uploadedFiles={secondaryImages!}
            />
          </div>
        </div>


      <div className="flex flex-col items-center">
          <div className="mb-10 w-full max-w-lg hidden md:block">
            <p className="text-3xl font-medium">Basic Information</p>
            <p>Give up some basic info about this information</p>
          </div>
          <div className="mb-4 w-full max-w-lg">
            <label className="label-text block text-secondary text-lg font-medium my-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div className="my-4 w-full max-w-lg">
            <label className="label-text block text-secondary text-lg font-medium my-2">
              Address
            </label>
            <input
              value={address}
              onChange={(evt) => setAddress(evt.target.value)}
              type="text"
              className="input input-bordered w-full max-w-lg"
            />
          </div>

          <div className="my-4 w-full max-w-lg">
            <label className="label-text block text-secondary text-lg font-medium my-2">
              Price
            </label>
            <input
              type="text"
              value={price}
              onChange={(evt) => setPrice(evt.target.value)}
              className="input input-bordered w-full max-w-lg"
            />
          </div>

          <div className="my-4 w-full max-w-lg">
            <label className="label-text block text-secondary text-lg font-medium my-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(evt) => setDescription(evt.target.value)}
              rows={6}
              className="border rounded-lg p-4 w-full max-w-lg"
            />
          </div>
          <div className="my-4 w-full max-w-lg">
            <button className={`btn btn-secondary text-white ${isFetching ? "loading disabled" : ""}`} onClick={() => refetch()}>Add Campground</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: "/campgrounds",
        permanent: false
      }
    }
  }

  return { props: { session } };
};

export default NewCampground;
