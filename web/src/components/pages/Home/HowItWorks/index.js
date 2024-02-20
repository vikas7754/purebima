import styles from "../AboutSection/about.module.scss";
import Image from "next/image";

function HowItWorks() {
  return (
    <div className={styles.container}>
      <h2>How PureBima Works</h2>
      <div className={styles.image}>
        <Image
          src="/images/working.png"
          alt="How it works"
          width={1000}
          height={500}
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
}

export default HowItWorks;
