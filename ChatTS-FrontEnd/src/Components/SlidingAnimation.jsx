import styles from "../StylesSheets/Animation.module.css";

// import chatbot from "";

export default function SlidingAnimation() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>ChatTS</h1>
      </div>
      <img src="./chatbot.avif" alt="image" className={styles.image} />
    </div>
  );
}