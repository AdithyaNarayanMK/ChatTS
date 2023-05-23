/* eslint-disable react/no-unescaped-entities */
import styles from "../StylesSheets/Home.module.css";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div >
      <div className={styles.name}>
        <h1>
          Introducing <span className={styles.title}>ChatTS</span>
        </h1>
      </div>
      <div className={styles.logodiv}>
         <img src="./chatbot.avif" className={styles.homelogo} />
      </div>
      <div className={styles.text1}>
        <p>
          Welcome to ChatTS - your go-to platform for extractive text summarization!
        </p>
        <p>
          At ChatTS, we understand that consuming and processing large volumes of text can be overwhelming and time-consuming. That's why we have developed a state-of-the-art extractive text summarization tool that helps you quickly and easily distill the most important information from any text.
        </p>
        <p>
          So why waste time reading through lengthy text when you can use ChatTS to extract the most important information quickly and efficiently?
        </p>
        <p>
          Try ChatTS today and experience the benefits of extractive text summarization for yourself!
        </p>
      </div>
      <div>
      <div className={styles.trychat}>
      <Link to="/signin">
       <button className={styles.buttontochat}><span className={styles.trychattext}>Try ChatTS</span></button>
      </Link>
      </div>
      </div>
      <div className={styles.subscription}>
        <a href="next-page.html" style={{ color: '#3076B9' }}>
          Read more about ChatTS
        </a>
      </div>
    </div>
  );
}
