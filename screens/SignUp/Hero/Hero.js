import React, { useState } from "react";
import cn from "classnames";
import styles from "./SignUp.module.sass";
import { use100vh } from "react-div-100vh";
import Link from "next/link";
import Entry from "../../../components/Entry/Entry";
import Code from "../../..//components/Code/Code";
import Image from "next/image";
// import Image from "../../components/Image";

const items = [
  "Atención en consultorio",
  "Visita domiciliaria",
  "Teleconsulta",
  "Sueroterapia",
  "Electrocardiograma",
  "Chequeo pre-quirúrgico",
];

const Hero = () => {
  const [visible, setVisible] = useState(true);
  const heightWindow = use100vh();

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.wrap}>
          <Link className={styles.logo} href="/">
            <a>
              <Image
                className={styles.pic}
                src="/images/logo.png"
                // srcDark="/images/logo-light.png"
                alt="Core"
                width={200}
                height={200}
              />  
            </a>
          </Link>
          <div className={cn("h4", styles.subtitle)}>Servicio Médico</div>
          <ul className={styles.list}>
            {items.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.col} style={{ minHeight: heightWindow }}>
        <div className={styles.head}>
          
          <div className={styles.info}>
            ¿Ya tiene una cuenta? {" "}
            <Link href="/sign-in">
              <a className={styles.link}>Iniciar sesión</a>
            </Link>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={cn("h2", styles.title)}>Registrarse</div>
          {visible ? <Entry onConfirm={() => setVisible(false)} /> : <Code />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
