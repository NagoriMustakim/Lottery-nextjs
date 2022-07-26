import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import Script from "next/script";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
        .h1{
          color : yellow
          
        }
        `}
      </style>

      <Head>
        <title>Lottery App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}
      <nav className={styles.mainnav}>
          <ul>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About Us</li></Link>
           <Link href='/blog'><li>Blogs</li></Link>
           <Link href='/contact'><li>contact us</li></Link>          
          </ul>
        </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Raffle Gainers</h1>

        <p className={styles.description}>
      Lottery blockchain node to node
        </p>
       

        <div className="blog">
          <div className= "blogItem">
            <h2 className="h1">Most popular post</h2>
            <h4>^How to play lottery</h4>
            <p>how to play lottery and win it and all ETH transfer to your account</p>
             </div>
        </div> 
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}