import cn from "classnames";
import styles from "./hero.module.css";
import Breadcrumb from "../../../components/Breadcrumb";
import { motion } from "framer-motion";
import { variants, item } from "../../../variants/animation";
import ScrollAnimation from "../../../components/ScrollAnimation";
import Item from "./Item";
import { Link as AnchorLink } from "react-scroll";

const items = [
  {
    color: "#b1e5fc",
    number: "#1",
    title: "Médico",
    subtitle:
      "Médico General por la Universidad Central del Ecuador.",
  },
  {
    color: "#ffbc99",
    number: "#2",
    title: "Especialista",
    subtitle:
      "Médico Especialista en Medicina Interna por la Pontifica Universidad Católica del Ecuador.",
  },
  {
    color: "#cabdff",
    number: "#3",
    title: "Magister",
    subtitle:
      "Master en Gerencia en Instituciones de Salud por la Universidad de las Américas.",
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
          <Breadcrumb name="NOSOTROS" />
          <motion.h1 variants={item} className={cn("hero", styles.title)}>
            ¿Quienes somos?
          </motion.h1>
          <motion.p variants={item} className={cn("body", styles.subtitle)}>
            Consultorio Medrano es un equipo de profesionales trabajando por tu salud, equipo liderado por la Especialista en Medicina Interna Doctora Stéfanny Medrano.
          </motion.p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.image_container}>
            <img className={styles.image} src="/images/consulMedrano.jpg"/>
          </div>
          <div className={styles.bottom_content}>
            <span className={cn("hairline-small", styles.text)}>EXPERIENCIA</span>
            <h1 className={cn("h2", styles.bottom_content_title)}>
              Una vida vivida para los demás vale la pena ser vivida
            </h1>
            <div className={styles.items_wrapper}>
              {items.map((item, index) => (
                <ScrollAnimation key={index}>
                  <Item {...item} />
                </ScrollAnimation>
              ))}
            </div>
            <ScrollAnimation>
              <AnchorLink to="learnmore" smooth={true}>
                <button className={cn("button", styles.button)}>
                  Conocer Más
                </button>
              </AnchorLink>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
