import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from 'next/router'
import { gql, request } from "graphql-request";
import { useSession } from "next-auth/react";

import Layout from "../../Components/Layout";
import Dropzone from "../../Components/Dropzone";
import toBase64 from "../../utils/FileToBase64";

const NewCampground: NextPage = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [primaryImages, setPrimaryImages] = useState<File[]>();
  const [secondaryImages, setSecondaryImages] = useState<File[]>();

  const addCampground = async () => {
    const addCampgroundMutation = gql`
      mutation addCampground($name: String!, $description: String!, $primaryImageB64: String!, $secondaryImageB64s: [String!]!, $address: String!, $price: Float!, $userId: ID!) {
        addCampground(data: { name: $name, description: $description, primaryImageB64: $primaryImageB64, secondaryImageB64s: $secondaryImageB64s, address: $address, price: $price, userId: $userId }) {
          id
        }
      }
    `
  const data = await request('http://localhost:3000/api/graphql', addCampgroundMutation, {
    name,
    description,
    primaryImageB64: await toBase64(primaryImages![0]),
    secondaryImageB64s: await Promise.all(secondaryImages?.map(async(image) => toBase64(image)) as unknown as string[]),
    address,
    price: Number(price),
    userId: session?.user.id
  })

  router.push(`/campgrounds/${data.addCampground.id}`)

  };

  return (
    <Layout>
      <div className="container mx-auto md:grid grid-cols-2 gap-10 h-full">
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
            <button className="btn btn-secondary" onClick={addCampground}>Add Campground</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewCampground;
