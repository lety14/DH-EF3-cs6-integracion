import React, { FC } from "react";
import styles from "../../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className={styles.header}>
      <Link href="./">
        <p className={styles.logo}>DEVS RED</p>
      </Link>
      <ul className={styles.navbar}>
        <li className={currentRoute === "/" ? styles.active : ""}>
          <Link href="./">Home</Link>
        </li>
        <li className={currentRoute === "/faqs" ? styles.active : ""}>
          <Link href="./faqs">Preguntas Frecuentes</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
