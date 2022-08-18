import { NextPage } from "next";
import styles from "../styles/Faqs.module.css";
import Head from "next/head";
import React from "react";
import IFaq from "../types/IFaq.type";

interface IProps {
  data: IFaq[];
}

const FAQS: NextPage<IProps> = ({ data }) => {
  const renderDataFaqs = () =>
    data.map((dataItem) => (
      <div key={dataItem.id}>
        <h3 className={styles.question}>
          <span className={styles.pin}>📌</span>
          {dataItem.title}
        </h3>
        <p className={styles.description}> {dataItem.description}</p>
      </div>
    ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Preguntas Frecuentes</title>
        <meta name="description" content="Preguntas frecuentes del sitio" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Preguntas frecuentes</h1>
        <div className={styles.containerQuestions}>{renderDataFaqs()}</div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://my-json-server.typicode.com/DH-Esp-Frontend/ctd-fe3-s2-c6-integracion-terminado/db"
  );
  const data = await response.json();

  return {
    props: {
      data: data.faqs,
    },
  };
}

export default FAQS;
