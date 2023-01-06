import { useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";

import { request, gql } from "graphql-request";

import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  useEffect(() => {
    const query = gql`
      {
        hello
      }
    `

    request('/api/graphql', query).then((data) => console.log(data))
  }, [])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3 z-0 bg-neutral">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className={`min-w-full min-h-full absolute object-cover opacity-50 ${styles.videoDocker}`}
          src="https://res.cloudinary.com/dtzsq6zws/video/upload/v1655792707/YelpCamp/Pexels_Videos_4097_gybkrb.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className={`video-content space-y-2 ${styles.videoContent}`}>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-7xl font-bold">YelpCamp</h1>
              <div className="py-6">
                <p>Welcome to YelpCamp!</p>
                <p>Jump right in and explore our many campgrounds!</p>
              </div>
              <Link href="/campgrounds">
                <button className="btn btn-primary">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
