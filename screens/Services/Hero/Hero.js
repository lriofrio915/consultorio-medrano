import cn from "classnames";
import styles from "./hero.module.css";
import Breadcrumb from "../../../components/Breadcrumb";
import { motion } from "framer-motion";
import { variants, item } from "../../../variants/animation";
import Card from "../../../components/Card";
import ScrollAnimation from "../../../components/ScrollAnimation";

const services = [
  {
    icon: "paint-bucket",
    title: "Atención Presencial",
    subtitle:
      "Mi objetivo es brindar a mis pacientes una atención personalizada y de alta calidad en el Consultorio Medrano.",
  },
  {
    icon: "plugin",
    title: "Atención Domiciliaria",
    subtitle:
      "En este modelo de atención, el paciente recibe los cuidados de salud en su propia residencia.",
  },
  {
    icon: "globe",
    title: "Teleconsulta",
    subtitle:
      "Nos llevamos muy bien con la tecnología, si el caso lo amerita el modelo de atención puede ser online.",
  },
  {
    icon: "zoom-check",
    title: "Sueroterapia",
    subtitle:
      "Los líquidos administrados contienen nutrientes y otros medicamentos según las necesidades del paciente.",
  },
  {
    icon: "shield-check",
    title: "Electrocardiograma",
    subtitle:
      "Es una prueba segura, indolora y no invasiva, lo que significa que no implica ningún riesgo para el paciente.",
  },
  {
    icon: "speed-test",
    title: "Valoración Integral",
    subtitle:
      "Tiene como objetivo identificar y evaluar factores de riesgo que pueden afectar la seguridad y el resultado de la cirugía.",
  },
];

const Hero = () => {
  return (
    <motion.div
      id="hero"
      initial="hidden"
      animate="show"
      variants={variants}
      className={cn("section section-pt", styles.section)}
    >
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Breadcrumb name="SERVICIOS" />
          <motion.h1 variants={item} className={cn("hero", styles.title)}>
            Servicios
          </motion.h1>
          <motion.p variants={item} className={cn("body", styles.subtitle)}>
          "Donde quiera que se ame el arte de la medicina, se ama también la humanidad".
          <br/>-Platón
          </motion.p>
        </div>

        <div className={styles.wrapper}>
          {services.map((item, index) => (
            <ScrollAnimation>
              <Card key={index} {...item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
