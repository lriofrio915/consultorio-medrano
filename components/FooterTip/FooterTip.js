import cn from "classnames";
import styles from "./footertip.module.css";

const FooterTip = () => {
  return (
    <div className={cn("container", styles.container)}>
      <p className={cn("caption", styles.title)}>
        Copyright © 2023 - La Clinica en Línea by {" "}
        <a
          href="https://www.facebook.com/Medicina-Interna-Dra-St%C3%A9fanny-Medrano-107410657304440"
          target="_blank"
          rel="noreferrer"
          className={cn("caption-bold", styles.author)}
        >
          Dra. Stéfanny Medrano
        </a>
      </p>
      <p className={cn("caption")}>Términos & Condiciones | Política de Privacidad </p>
    </div>
  );
};

export default FooterTip;
