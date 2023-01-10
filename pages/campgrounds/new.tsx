import { NextPage } from "next";

import Layout from "../../Components/Layout";

const NewCampground: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 h-full">
        <div></div>

        <div>
          <div className="my-4">
            <label className="label-text block text-secondary text-lg font-medium my-2">Name</label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
          </div>

          <div className="my-4">
            <label className="label-text block text-secondary text-lg font-medium my-2">Address</label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
          </div>

          <div className="my-4">
            <label className="label-text block text-secondary text-lg font-medium my-2">Price</label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
          </div>

          <div className="my-4">
            <label className="label-text block text-secondary text-lg font-medium my-2">Description</label>
            <textarea placeholder="Type here" rows={6} className="border rounded-lg p-4 w-full max-w-lg" />
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default NewCampground;
