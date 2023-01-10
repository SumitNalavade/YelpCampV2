import React from "react";
import Head from 'next/head'

import Navbar from "./Navbar"

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return(
        <>
            <Head>
            <title>YelpCamp V2</title>
            <meta name="description" content="YelpCamp V2" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col bg-base-100">
                <Navbar />
                <div className="flex-1 mt-6 text-neutral h-screen">
                    { children }
                </div>
            </main>
      </>
    )
}

export default Layout;