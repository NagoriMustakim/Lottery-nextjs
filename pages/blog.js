import React from "react";
import styles from "../styles/blog.module.css";
import Image from "next/image";
const blog = () => {
  return (
    <>
      <h1 className={styles.blogh1}>Blogs</h1>
      <h2>Blog on Raffle</h2>
      <h4 className={styles.blogh4}>
        A raffle is a gambling competition in which people obtain numbered
        tickets, each of which has the chance of winning a prize
      </h4>
      <h2>Blog on Web-3</h2>
      <h4 className={styles.blogh4}>
        Web3 (also known as Web 3.0) is an idea for a new iteration of the World
        Wide Web which incorporates concepts such as decentralization,
        blockchain technologies, and token-based economics.
      </h4>
      <h2>Blog on blockchain</h2>
      <h4 className={styles.blogh4}>A blockchain is a growing list of records, called blocks, that are securely linked together using cryptography.</h4>
      <h2>Blog on NFT</h2>
      <h4 className={styles.blogh4}>A non-fungible token NFT is a financial security consisting of digital data stored in a blockchain, a form of distributed ledger.</h4>
    </>
  );
};

export default blog;
