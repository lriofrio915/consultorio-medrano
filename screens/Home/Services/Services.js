import styles from "./services.module.css";
import cn from "classnames";
import TextOverlap from "../../../components/TextOverlap";
import Tag from "../../../components/Tag";
import Fact from "./Fact";
import ScrollAnimation from "../../../components/ScrollAnimation";
import Card from "../../../components/Card";
import Link from "next/link";

const services = [
  {
    icon: "plugin",
    title: "Atención Presencial",
    subtitle:
      "En el consultorio médico.",
  },
  {
    icon: "globe",
    title: "Atención Domiciliaria",
    subtitle:
      "En la vivienda del paciente.",
  },
  {
    icon: "globe",
    title: "Teleconsulta",
    subtitle:
      "Mediante llamada o vídeollamada.",
  },
  {
    icon: "paint-bucket",
    title: "Sueroterapia",
    subtitle:
      "Según la necesidad del paciente.",
  },
  {
    icon: "plugin",
    title: "Electrocardiograma",
    subtitle:
      "Toma e interpretación de resultados.",
  },
  {
    icon: "globe",
    title: "Valoración Integral",
    subtitle:
      "Previo a la cirugía.",
  },
];

const facts = [
  {
    icon: "diamond",
    number: "Atención",
    title: "Previa Cita",
  },
  {
    icon: "star",
    number: "Horario",
    title: "9am - 8pm",
  },
  {
    icon: "heart",
    number: "Días",
    title: "Lunes a Sábado",
  },
  {
    icon: "speed-test",
    number: "Emergencias",
    title: "Disponible",
  },
];

const Services = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number="01" background="#ffbc99" />
            <TextOverlap title="Servicios" text="Servicios" />
          </div>
          <Link href="/services">
            <a className={cn("button-small", styles.button)}>Ver Más</a>
          </Link>
        </div>

        <div className={styles.wrapper}>
          {services.map((item, index) => (
            <ScrollAnimation key={index}>
              <Card {...item} />
            </ScrollAnimation>
          ))}
        </div>
        <div className={styles.facts_wrapper}>
          {facts.map((item, index) => (
            <ScrollAnimation key={index}>
              <Fact {...item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
