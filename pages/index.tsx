import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Card from "../components/Card";
import IUser from "../types/IUser.type";

interface IProps {
  data: { results: IUser[] };
}

const Home: NextPage<IProps> = ({ data: { results } }) => {
  const renderResults = () =>
    results.map((result) => <Card data={result} key={result.login.username} />);

  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.title}>DEVS RED</title>
        <meta
          name="description"
          content="Una web en donde podrás conectar con otros desarrolladores de forma rápida y sencilla"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>DEVS RED</h1>
          <p className={styles.subtitle}>
            -- Una red para contactar con otros desarrolladores --
          </p>
        </div>
        <section className={styles.section}>
          <div className={styles.grid}>{renderResults()}</div>
        </section>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://randomuser.me/api/?results=12`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
