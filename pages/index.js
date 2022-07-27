import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lottery App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Raffle Gainers <br />
        </h1>
        <Image
          className={styles.myimg}
          src="/lottery.jpg"
          alt="Loading....."
          width={800}
          height={500}
        />

        <p className={styles.description}>Lottery blockchain node to node</p>

        <div className="blog">
          <div className="blogItem">
            <h2>Most popular post</h2>
            <h4 className={styles.blogclass}>How to play lottery</h4>
            <p>
              how to play lottery and win it and all ETH transfer to your
              account
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

//\\wsl$\Ubuntu-20.04\root\next.js\project\huntingcode\public
