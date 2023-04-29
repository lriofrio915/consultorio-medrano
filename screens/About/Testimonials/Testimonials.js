import cn from "classnames";
import Testimonial from "./Testimonial";
import styles from "./testimonials.module.css";
import ScrollAnimation from "../../../components/ScrollAnimation";

const Testimonials = () => {
  return (
    <div id="learnmore" className={cn("section", styles.section)}>
      <div className={styles.opacity} />
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <span className={cn("hairline-small", styles.hairline)}>
            TESTIMONIOS
          </span>
          <h1 className={cn("h2", styles.title)}>
            ¿Qué opinan nuestros pacientes?
          </h1>
        </div>
        <ScrollAnimation>
          <Testimonial />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Testimonials;
