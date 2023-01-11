import React, { useState } from "react";
import { NextPage } from "next";

import Layout from "../../Components/Layout";
import Dropzone from "../../Components/Dropzone";

const NewCampground: NextPage = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [primaryImages, setPrimaryImages] = useState<File[]>();
  const [secondaryImages, setSecondaryImages] = useState<File[]>();

  return (
    <Layout>
      <div className="container mx-auto grid grid-cols-2 h-full">
        <div>
          <div className="mb-16">
            <Dropzone
              multiple={false}
              text={"Upload Primary Image"}
              setFile={setPrimaryImages}
            />
            <p className="my-4">
                { primaryImages?.length! > 0 ? <p>{ primaryImages![0].name }</p> : "" }
            </p>
          </div>
          <div className="h-full">
            <Dropzone
              multiple={true}
              text={"Upload Secondary Images"}
              setFile={setSecondaryImages}
            />
            {secondaryImages?.map((image, index) => (
              <p className="my-4" key={index}>
                {image.name}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
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
        </div>
      </div>
    </Layout>
  );
};

export default NewCampground;
