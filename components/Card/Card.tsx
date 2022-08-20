import { NextPage } from "next";
import styles from "../../styles/Card.module.css";
import Image from "next/image";
import React from "react";
import IUser from "../../types/IUser.type";

interface IProps {
  data: IUser;
}

const Card: NextPage<IProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <picture>
          <div className={styles.image}>
            <Image
              src={data.picture.medium}
              alt={data.name.first}
              layout="fixed"
              width={100}
              height={100}
            />
          </div>
        </picture>
        <h2
          className={styles.name}
        >{`${data.name.first} ${data.name.last}`}</h2>
      </div>
      <div className={styles.dataContainer}>
        <p className={styles.data}>{data.login.username}</p>
        <p className={styles.data}>{data.email}</p>
      </div>
    </div>
  );
};

export default Card;
