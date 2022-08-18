import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { FAQ } from "../types/faq.type";

interface IProps {
  data: FAQ[];
}

const FAQS: NextPage<IProps> = () => {
  return (
    <div>
      <Head>
        <title>Preguntas Frecuentes</title>
        <meta name="description" content="Preguntas frecuentes del sitio" />
      </Head>
      <h1>Preguntas frecuentes</h1>
    </div>
  );
};

export default FAQS;
