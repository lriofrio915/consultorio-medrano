import cn from "classnames";
import Layout from "../components/Layout";
import { Hero, Testimonials } from "../screens/About";
import CTA from "../components/CTA";

const About = () => {
  return (
    <Layout>
      <Hero />
      <Testimonials />
      <CTA
        background="#92A5EF"
        title="Da el primer paso"
        button="Agendar Cita"
      />
    </Layout>
  );
};

export default About;
