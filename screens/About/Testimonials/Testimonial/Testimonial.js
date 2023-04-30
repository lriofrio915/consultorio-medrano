import cn from "classnames";
import styles from "./testimonial.module.css";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className={styles.container}>
      <h1 className={cn("h4", styles.title)}>Gran calidad humana</h1>
      <p className={cn("caption", styles.subtitle)}>
        Mi experiencia con la dra. Medrano fue muy beneficiosa, me sentí segura y en confianza de estar ante una gran profesional, control tras control he ido mejorando mucho mi salud.
      </p>

      <div className={styles.author_container}>
        <Image 
          src="/images/cesar.jpg" 
          className={styles.image}
          width={44}
          height={44} 
        />
        <div className={styles.content}>
          <p className={cn("body-2-bold", styles.author)}>Estela Cabrera</p>
          <p className={cn("caption", styles.position)}>Mujer, 35 años.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
