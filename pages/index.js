import Head from "next/head"
import { Navbar } from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Head>
        <title>PATIO Homepage</title>
        {/* 
        <meta
          name="description"
          content="ITCC Community. Technical cooperatives from all over the world"
        />
      */}
      </Head>
      {/* <Header /> */}
      <Navbar />
      <main></main>
      {/* <Footer /> */}
    </>
  )
}
