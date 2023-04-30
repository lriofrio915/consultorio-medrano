import cn from "classnames";
import Link from "next/link";
import ScrollAnimation from "../../../components/ScrollAnimation";
import Tag from "../../../components/Tag";
import TextOverlap from "../../../components/TextOverlap";
import Project from "./Project";
import styles from "./projects.module.css";

const projects = [
  {
    embed: "WVWxPIzEM3A",
    image: "/images/01.jpg",
    title: "Cardíacas",
  },
  {
    embed: "WABOrIYhR94",
    image: "/images/02.jpg",
    title: "Metabólicas",
  },
  {
    embed: "JXxAnZaZrG0",
    image: "/images/03.jpg",
    title: "Renales",
  },
  {
    embed: "_a0T5qwxANg",
    image: "/images/04.jpg",
    title: "Pulmonares",
  },
  {
    embed: "o3vqfdvatsQ",
    image: "/images/05.jpg",
    title: "Infecto-contagiosas",
  },
  {
    embed: "HdtJtIQhzbQ",
    image: "/images/06.jpg",
    title: "Inmunitarias",
  },
];

const Projects = () => {
  return (
    <div id="projects" className={cn("section section-pb")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number="02" background="#cabdff" />
            <TextOverlap title="Control de Enfermedades" text="Enfermedades" />
          </div>
          <Link href="/services">
            <a className={cn("button-small", styles.button)}>Ver más</a>
          </Link>
        </div>

        <div className={styles.wrapper}>
          {projects.map((item, index) => (
            <ScrollAnimation key={index}>
              <Project  {...item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
