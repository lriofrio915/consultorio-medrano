import styles from "./hero.module.css";
import cn from "classnames";
import Stats from "./Stats";
import { variants, item } from "../../../variants/animation";
import Link from "next/link";
import Image from "next/image";

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
        <div
          initial="hidden"
          animate="show"
          variants={variants}
          className={styles.content}
        >
          <span variants={item} className={cn("hairline", styles.span)}>
            SERVICIOS DE SALUD INTEGRAL
          </span>
          <h1 variants={item} className={cn("hero", styles.title)}>
            {"Al cuidado de tu salud"}
          </h1>
          <p variants={item} className={cn("body", styles.subtitle)}>
            Diagnóstico y tratamiento de las enfermedades que afectan al paciente joven y adulto mayor.
          </p>
          <div className={styles.wrapper}>
            <Link href="/sign-in">
              <a>
                <button
                  variants={item}
                  className={cn("button", styles.button)}
                >
                  Iniciar Sesión
                </button>
              </a>
            </Link>
            <Link href="/sign-up" offset={-128} smooth={true}>
              <a>
                <button
                  variants={item}
                  className={cn("button button-stroke", styles.button)}
                >
                  Registrarme
                </button>
              </a>
            </Link>
          </div>

          <div className={styles.stats_wrapper}>
            {stats.map((item, index) => (
              <div key={index} variants={item}>
                <Stats {...item} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.image_container}>
          <Image
            className={styles.image}
            src="/images/avatar.jpg"
            layout="fill"
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
