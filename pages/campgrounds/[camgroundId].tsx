import { NextPage } from "next";

import Layout from "../../Components/Layout";

const CampgroundPage: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto h-screen">
        <div className="bg-base-100">
            <div className="mx-2 mb-6">
                <p className="text-3xl font-medium">Hygge Hideaway</p>
                <p>Broken Bow, Oklahoma, United States</p>
            </div>

            <div className="grid grid-cols-2">
                <div className="mx-2">
                    <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-656420712213679418/original/a6e7649b-dd5c-4e87-bfe0-21dcde94ea8b.jpeg?im_w=960" alt="" className="rounded-xl" />
                </div>

                <div className="grid grid-cols-2 mx-2">
                    <div className="mx-2">
                        <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-656420712213679418/original/1ef82420-a40f-4489-9aed-0105d1b93044.jpeg?im_w=720" alt="" className="my-2 rounded-xl" />
                        <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-656420712213679418/original/274b5fe8-16d7-4706-8161-3732dd773533.jpeg?im_w=720" alt="" className="my-2 rounded-xl" />
                    </div>

                    <div className="mx-2">
                        <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-656420712213679418/original/abc86bc5-ee45-4b3f-abaf-a9e13937ac28.jpeg?im_w=720" alt="" className="my-2 rounded-xl" />
                        <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-656420712213679418/original/243eda03-73f1-40f5-89b8-7c154e228da0.jpeg?im_w=720" alt="" className="my-2 rounded-xl" />
                    </div>                    
                </div>
            </div>

            <div className="w-full grid grid-cols-2 place-content-around">
                <div className="my-6">
                    <p>Welcome to the brand new Hygge Hideaway! As soon as you drive up, you&quot;ll see that that this lakefront cabin sits right next to our very own Pine Lake and is all about unplugging and getting back to the simple, enjoyable moments that make life grand.  Hygge Hideaway greets you with an airy, open floor plan interspersed with nature-inspired design choices and whimsical decor hinting that you should let out your inner &quot;cabin life&quot; state of mind and let yourself be </p>
                </div>

                <div className="mx-20">
                    <div className="rounded-xl bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2><span className="card-title inline text-2xl">$597 </span>night</h2>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-1" className="mask mask-star bg-neutral" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-neutral" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-neutral" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-neutral" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p className="text-lg">Hosted By Ginger</p>
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

export default CampgroundPage;
