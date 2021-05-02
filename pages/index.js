import Head from "next/head"
import Header from "../components/Header"
import MetaContent from "../components/MetaContent"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <MetaContent />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;900&display=swap"
          rel="stylesheet"
        />
        <title>
          Adverb Advertising | Advertise your business from as low as Kshs. 899
          a week
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
    </>
  )
}
