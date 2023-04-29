import React from "react";
import CTA from "../components/CTA";
import Layout from "../components/Layout";
import News from "../components/News";
import { getSortedNewsData } from "../lib/news";
import { Hero, Services } from "../screens/Home";

export async function getStaticProps() {
  const allNewsData = getSortedNewsData();

  return {
    props: {
      allNewsData,
    },
  };
}

export default function Home({ allNewsData }) {
  return (
    <Layout>
       <Hero />
      <Services />
      <News number="02" allNewsData={allNewsData} />
      <CTA
        number="04"
        background="#ffd88d"
        title="Vamos a mejorar tu calidad de vida"
        button="Agendar Cita"
      />
    </Layout>
  );
}
