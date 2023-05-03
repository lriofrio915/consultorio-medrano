import React from "react";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import { use100vh } from "react-div-100vh";
import Link from "next/link";
import TextInput from "../../../components/TextInput";
import Image from "next/image";
// import Image from "../../components/Image";

const Hero = () => {
  const heightWindow = use100vh();

  return (
    // <p className={styles.titulo}>Hola mundo</p>
    <div className={styles.login} style={{ minHeight: heightWindow }}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href="/">
          <a>
            <Image
              className={styles.pic}
              src="/images/logoMedrano.png"
              width={175}
              height={175}
              // srcDark="/images/logo-light.png"
              alt="Core"
            />
          </a>
        </Link>
        <div className={cn("h2", styles.title)}>Bienvenidos</div>
        <div className={styles.head}>
          <div className={styles.subtitle}>Inicia sesión fácilmente con</div>
          <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              <img 
                src="/images/content/google.svg" alt="Google" 
              />
              <h2>Google</h2>
            </button>
            <button className={cn("button-stroke", styles.button)}>
              <img
                src="/images/content/apple-dark.svg"
                //srcDark="/images/content/apple-light.svg"
                alt="Apple"
              />
              <h2>Apple ID</h2>
            </button>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.subtitle}>O continúa con tu dirección de email</div>
          <TextInput
            className={styles.field}
            name="email"
            type="email"
            placeholder="Email"
            required
            icon="mail"
          />
          <TextInput
            className={styles.field}
            name="password"
            type="password"
            placeholder="Contraseña"
            required
            icon="lock"
          />
          <button className={cn("button", styles.button)}>Iniciar sesión</button>
          <div className={styles.note}>
            Este sitio está protegido por reCAPTCHA y la Política de Privacidad de Google.
          </div>
          <div className={styles.info}>
            ¿No tiene una cuenta?{" "}
            <Link className={styles.link} href="/sign-up">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
