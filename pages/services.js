import React from "react";
import CTA from "../components/CTA";
import Layout from "../components/Layout";
import { Hero, Pricing } from "../screens/Services";

export default function Services() {
  return (
    <Layout>
      <Hero />
      <Pricing />
      <CTA
        number="02"
        background="#92A5EF"
        title="Nos vemos en consulta"
        button="Agendar Cita"
      />
    </Layout>
  );
}
