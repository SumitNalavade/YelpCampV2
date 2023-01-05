import React from "react";
import Head from 'next/head'

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

            <main className="container mx-auto h-screen">
                { children }
            </main>
      </>
    )
}

export default Layout;