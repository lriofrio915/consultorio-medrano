import cn from "classnames";
import Link from "next/link";
import styles from "./footer.module.css";

const sites = [
  {
    link: "/",
    title: "Inicio",
  },
  {
    link: "/portfolio",
    title: "Servicios",
  },
  {
    link: "/about",
    title: "Nosotros",
  },
  {
    link: "/blog",
    title: "Blog",
  },
];

const information = [
  {
    title: "FAQ",
  },
  {
    title: "Mapa del Sitio",
  },
  {
    title: "Política de Cookies",
  },
  {
    title: "Contáctanos",
  },
];

const contact = [
  {
    title: "WhatsApp: (+593) 98 267 8350",
  },
  {
    title: "Email: stefy@laclinicaenlinea.com",
  },
  {
    title: "Ecuador",
  },
];

const Footer = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.main_content}>
          <h4 className={cn("body-bold", styles.title)}>Dra. Stéfanny Medrano</h4>
          <p className={cn("caption", styles.subtitle)}>
            Es especialista en Medicina Interna y se ocupa de la atención integral de jóvenes y adultos diagnosticando tratamientos no quirúrgicos y preventivos.
          </p>

          <div>
            <p className={cn("body-2-bold")}>Subscríbete a nuestro boletín</p>
            <div className={styles.newsletter}>
              <input
                className={cn("caption", styles.input)}
                placeholder="Email"
              />
              <button className={cn("button")}>Unirse</button>
            </div>
          </div>
        </div>
        <div className={styles.sub_content}>
          <div className={styles.content}>
            <h4 className={cn("body-2-bold", styles.title)}>Sitio</h4>
            <div className={styles.links}>
              {sites.map((item, index) => (
                <Link href={item.link} key={index}>
                  <a className={cn("button-small", styles.button)}>
                    {item.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <h4 className={cn("body-2-bold", styles.title)}>Información</h4>
            <div className={styles.links}>
              {information.map((item, index) => (
                <button
                  key={index}
                  className={cn("button-small", styles.button)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <h4 className={cn("body-2-bold", styles.title)}>Contacto</h4>
            <div className={styles.links}>
              {contact.map((item, index) => (
                <button
                  key={index}
                  className={cn("button-small", styles.button)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
