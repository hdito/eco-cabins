import { Hero } from "@/components/Hero";
import { Innovation } from "@/components/Innovation";
import { Materials } from "@/components/Materials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoCabins</title>
        <meta name="description" content="EcoCabins landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Materials />
      <Innovation />
    </>
  );
}
