import React from "react";
import cn from "classnames";
import styles from "./Code.module.sass";
import Loader from "../Loader";

const Code = () => {
  return (
    <div className={styles.code}>
      <div className={styles.body}>
        <div className={styles.info}>
          Te enviamos un código de verificación. Revisa tu bandeja de entrada.
        </div>
        <div className={styles.fieldset}>
          <div className={styles.field}>
            <input
              className={styles.input}
              name="number1"
              type="tel"
              autocomplete="off"
              required
            />
          </div>
          <div className={styles.field}>
            <input
              className={styles.input}
              name="number2"
              type="tel"
              autocomplete="off"
              required
            />
          </div>
          <div className={styles.field}>
            <input
              className={styles.input}
              name="number3"
              type="tel"
              autocomplete="off"
              required
            />
          </div>
          <div className={styles.field}>
            <input
              className={styles.input}
              name="number4"
              type="tel"
              autocomplete="off"
              required
            />
          </div>
        </div>
        <div className={styles.errorNote}>
          El código que ingresaste es incorrecto.
        </div>
        <button className={cn("button", styles.button)}>
          <Loader className={styles.loader} white />
          <span>Continuar</span>
        </button>
        <div className={styles.note}>
          Este sitio está protegido por reCAPTCHA y la Política de Privacidad de Google.
        </div>
      </div>
    </div>
  );
};

export default Code;
