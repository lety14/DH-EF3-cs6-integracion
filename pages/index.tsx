import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import IUser from "../types/IUser.type";

interface IProps {
  data: { results: IUser[] };
}

const Home: NextPage<IProps> = ({ data: { results } }) => {
  const renderResults = () =>
    results.map((result) => (
      <div key={result.login.username}>
        <picture>
          <Image
            src={result.picture.medium}
            alt={result.name.first}
            layout="fixed"
            width={100}
            height={100}
          />
        </picture>
        <h2>{`${result.name.first} ${result.name.last}`}</h2>
        <p>{result.login.username}</p>
        <p>{result.email}</p>
      </div>
    ));

  return (
    <div>
      <Head>
        <title>RandomUsers</title>
        <meta
          name="description"
          content="Una web en donde podrás conectar con otras personas de forma rápida y sencilla"
        />
      </Head>
      <main>
        <h1>RandomUsers</h1>
        <div>{renderResults()}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://randomuser.me/api/?results=10`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
