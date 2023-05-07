import styles from "./header.module.css";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Icon from "../Icon";
import Icon2 from "../Icon2";
import OutsideClickHandler from "react-outside-click-handler";
import Schedule from "../Schedule";
import Modal from "../../components/Modal/index";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Nosotros", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contact" },
];

const white = "#fcfcfd";

const Header = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  // const handleClickAgendarCita = () => {
  //   setMostrarCalendario(true);
  // };

  const openMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const closeCalendar = () => {
    setMostrarCalendario(false);
  };

  const colorChange = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    colorChange();
    window.addEventListener("scroll", colorChange);
    return () => {
      window.removeEventListener("scroll", colorChange);
    }
  }, []);

  return (
    <header
      style={{
        background: navbar ? white : "",
        borderBottom: navbar ? "1px solid rgba(35, 38, 47, 0.1)" : "",
      }}
      className={styles.section}
    >
      <div className={cn("container", styles.container)}>
        <Link href="/">
          <a
            className={cn(
              "body-bold",
              navbar ? styles.active_logo : styles.logo
            )}
            style={{
              color:
                router.pathname == "/" ? (navbar ? "#2a85ff" : "#fcfcfd") : "",
            }}
          >
            Consultorio Medrano
          </a>
        </Link>

        <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
          <div className={menu ? styles.responsive_links : styles.links}>
            {links.map((item, index) => (
              <Link key={index} href={item.href}>
                <a
                  className={cn(
                    "button-small",
                    router.pathname == item.href
                      ? styles.active
                      : styles.inactive
                  )}
                >
                  {item.name}
                </a>
              </Link>
            ))}

            <button
              className={cn("button-svg", styles.close_button)}
              onClick={closeMenu}
            >
              <Icon name="close" />
            </button>
            {/* responsive view */}
            <button onClick={()=>{setMostrarCalendario(true)}} className={cn("button", styles.menu_link)}>
              <Icon2 className={styles.button} fill= {white} name="calendar" size="24" />
              <span >Agendar</span> 
            </button>
          </div>
        </OutsideClickHandler>
        {/* desktop view */}
        <OutsideClickHandler onOutsideClick={() => closeCalendar(false)}>
          <button onClick={()=>setMostrarCalendario(true)} className={cn("button", styles.link)}>
            <Icon2 fill= {white} className={styles.button} name="calendar" size="24" /> 
            <span>Agendar</span>
          </button>
        </OutsideClickHandler> 
        {
            mostrarCalendario && 
            <Modal
              visible={mostrarCalendario}
              onClose={() => setMostrarCalendario(false)}
            >
              <Schedule
                startDate={startDate}
                setStartDate={setStartDate}
                startTime={startTime}
                setStartTime={setStartTime}
              />
            </Modal>
          }          
        <button
          className={cn("button-svg", styles.open_button)}
          onClick={openMenu}
        >
          <Icon name="menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
