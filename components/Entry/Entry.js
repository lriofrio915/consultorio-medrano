import React from "react";
import cn from "classnames";
import styles from "./Entry.module.sass";
import TextInput from "../../components/TextInput";
// import Image from "../../../components/Image";

const Entry = ({ onConfirm }) => {
  return (
    <div className={styles.entry}>
      <div className={styles.head}>
        <div className={styles.info}>Regístrate fácilmente con</div>
        <div className={styles.btns}>
          <button className={cn("button-stroke", styles.button)}>
            <img src="/images/content/google.svg" alt="Google" />
            <h2>Google</h2>
          </button>
          <button className={cn("button-stroke", styles.button)}>
            <img
              className={styles.pic}
              src="/images/content/apple-dark.svg"
              // srcDark="/images/content/apple-light.svg"
              alt="Apple"
            />
            <h2>Apple ID</h2>
          </button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.info}>O continúa con tu correo electrónico</div>
        <TextInput
          className={styles.field}
          name="email"
          type="email"
          placeholder="Email"
          required
          icon="mail"
        />
        <button className={cn("button", styles.button)} onClick={onConfirm}>
          Continuar
        </button>
        <div className={styles.note}>
        Este sitio está protegido por reCAPTCHA y la Política de Privacidad de Google.
        </div>
      </div>
    </div>
  );
};

export default Entry;
