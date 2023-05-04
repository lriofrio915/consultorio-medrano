import styles from "./hero.module.css";
import cn from "classnames";
import Stats from "./Stats";
import { motion } from "framer-motion";
import { variants, item } from "../../../variants/animation";
import Link from "next/link";

const stats = [
  {
    title: "+15",
    text: "Años de Experiencia",
  },
  {
    title: "100%",
    text: "Pacientes Satisfechos",
  },
];

const Hero = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
          className={styles.content}
        >
          <motion.span variants={item} className={cn("hairline", styles.span)}>
            SERVICIOS DE SALUD INTEGRAL
          </motion.span>
          <motion.h1 variants={item} className={cn("hero", styles.title)}>
            {"Al cuidado de tu salud"}
          </motion.h1>
          <motion.p variants={item} className={cn("body", styles.subtitle)}>
            Diagnóstico y tratamiento de las enfermedades que afectan al paciente joven y adulto mayor.
          </motion.p>
          <div className={styles.wrapper}>
            <Link href="/sign-in">
              <a>
                <motion.button
                  variants={item}
                  className={cn("button", styles.button)}
                >
                  Iniciar Sesión
                </motion.button>
              </a>
            </Link>
            <Link href="/sign-up" offset={-128} smooth={true}>
              <motion.button
                variants={item}
                className={cn("button button-stroke", styles.button)}
              >
                Registrarme
              </motion.button>
            </Link>
          </div>

          <div className={styles.stats_wrapper}>
            {stats.map((item, index) => (
              <motion.div key={index} variants={item}>
                <Stats {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className={styles.image_container}>
          <img
            className={styles.image}
            src="/images/avatar.jpg"
            layout="fill"
            placeholder="blur"
            // blurDataURL="/images/avatar.jpg"
          />

          <div className={styles.author}>
            <p className={cn("caption", styles.name)}>Dra. Stéfanny Medrano</p>
          </div>
          <div className={styles.overlay} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
