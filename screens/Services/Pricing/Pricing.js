import cn from "classnames";
import React, { useState } from "react";
import styles from "./pricing.module.css";
import TextOverlap from "../../../components/TextOverlap";
import Tag from "../../../components/Tag";
import ScrollAnimation from "../../../components/ScrollAnimation";
import { Link as AnchorLink } from "react-scroll";

const pricing = [
  {
    plan: "CONSULTA GENERAL",
    price: "$30",
    background: "#f4f5f6",
  },
  {
    plan: "ATENCIÓN DOMICILIARIA",
    price: "$40",
    background: "#f4f5f6",
  },
  {
    plan: "TELECONSULTA",
    price: "$20",
    background: "#f4f5f6",
  },
  {
    plan: "SUEROTERAPIA",
    price: "$45",
    background: "#f4f5f6",
  },
  {
    plan: "ELECTROCARDIOGRAMA",
    price: "$35",
    background: "#f4f5f6",
  },
  {
    plan: "CHEQUEO PREQUIRURGICO",
    price: "$40",
    background: "#f4f5f6",
  },
  {
    plan: "REVISIÓN DE RESULTADOS",
    price: "$15",
    background: "#f4f5f6",
  },
  {
    plan: "EMERGENCIAS",
    price: "$45",
    background: "#f4f5f6",
  }
];

const Pricing = () => {

  return (
    
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number="01" background="#ffbc99" />
            <TextOverlap title="Precios" text="Precios" />
          </div>

          <AnchorLink to="hero" smooth={true}>
            <button className={cn("button-small", styles.button)}>
              Ver Servicios
            </button>
          </AnchorLink>
        </div>
        <div className={styles.wrapper}>
          {pricing.map((type, index) => (
            <ScrollAnimation key={index}>
              <div 
                className={styles.item_container}
                style={{
                  background: type.background,
                  boxShadow: `inset 0 0 0 2px ${type.shadow}`,
                }}
              >
                <p className={cn("hairline-small")}>{type.plan}</p>
                <h2 className={cn("h1", styles.price)}>{type.price}</h2>
                <button className={cn("button", styles.price_button)}>
                  Pagar
                </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
