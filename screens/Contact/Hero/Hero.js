import cn from "classnames";
import Breadcrumb from "../../../components/Breadcrumb";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
import { item, variants } from "../../../variants/animation";
import ScrollAnimation from "../../../components/ScrollAnimation";
import Card from "../../../components/Card";

const items = [
  {
    icon: "navigation",
    title: "Dirección",
    subtitle: "García Moreno y Olmedo.",
    text: "Tena, EC 150150",
    boolean: "true",
  },
  {
    icon: "mail-right",
    title: "Email",
    subtitle: "stefy@laclinicaenlinea.com",
    text: "info@laclinicaenlinea.com",
    boolean: "true",
  },
  {
    icon: "call",
    title: "WhatsApp",
    subtitle: "+593 98 267 8350",
    text: "Solo Mensajes",
    boolean: "true",
  },
  {
    icon: "call",
    title: "Redes Sociales",
    subtitle: "IG: dra_stefanny_medrano",
    text: "FB: Dra. Stéfanny Medrano",
    boolean: "true",
  },
];

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className={cn("section", styles.section)}
    >
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Breadcrumb name="CONTACTO" />
          <motion.h1 variants={item} className={cn("hero", styles.title)}>
            Contacto
          </motion.h1>
        </div>

        <div className={styles.wrapper}>
          {items.map((item, index) => (
            <ScrollAnimation key={index}>
              <Card position="center" align="center" {...item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
