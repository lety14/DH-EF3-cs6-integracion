import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header>
      <Link href="./">
        <Image src="/logo.png" width={45} height={45} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link href="./">Home</Link>
        </li>
        <li>
          <Link href="./faqs">Preguntas Frecuentes</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
