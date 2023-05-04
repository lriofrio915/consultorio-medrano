import React, { useState } from "react";
import cn from "classnames";
import styles from "./SignUp.module.sass";
import { use100vh } from "react-div-100vh";
import Link from "next/link";
import Entry from "../../../components/Entry/Entry";
import Code from "../../..//components/Code/Code";
// import Image from "../../components/Image";

const items = [
  "Unlimited product uploads",
  "Pro tips",
  "Free forever",
  "Full author options",
];

const Hero = () => {
  const [visible, setVisible] = useState(true);
  const heightWindow = use100vh();

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.wrap}>
          <div className={styles.preview}>
            <img src="/images/content/login-pic.png" alt="Login" />
          </div>
          <div className={cn("h4", styles.subtitle)}>Plan includes</div>
          <ul className={styles.list}>
            {items.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.col} style={{ minHeight: heightWindow }}>
        <div className={styles.head}>
          <Link className={styles.logo} href="/">
            <img
              className={styles.pic}
              src="/images/logo-dark.png"
              // srcDark="/images/logo-light.png"
              alt="Core"
            />
          </Link>
          <div className={styles.info}>
            Already a member?{" "}
            <Link className={styles.link} href="/sign-in">
              Iniciar sesión
            </Link>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={cn("h2", styles.title)}>Sign up</div>
          {visible ? <Entry onConfirm={() => setVisible(false)} /> : <Code />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
