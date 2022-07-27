import React from "react";
import styles from "../styles/blog.module.css";
import Image from "next/image";
const blog = () => {
  return (
    <>
      <h3>Blog on Raffle</h3>
      <p>
        If you want guaranteed cash for your cause, a 50/50 raffle is the place
        to start when considering fundraising ideas. <br /> They’re fun and easy
        for both fundraisers and donors, and a no-nonsense way to generate
        income – fast. <br /> So we’ve put together everything you need to know
        about 50/50 raffle fundraising in one comprehensive guide that will help
        you succeed, <br /> whether this raffle is your first or your fiftieth!
        What is a 50/50 Raffle? <br /> The clue is in the name! A 50/50 raffle
        splits the income from raffle ticket sales 50/50…
      </p>
      <Image 
        src="/Raffle.jpg"
        alt="Picture of Lottery"
        width={500}
        height={500}
      />
    </>
  );
};

export default blog;
