import Image from "next/image";
import styles from "../OurPartners/partners.module.scss";

function AppSection() {
  return (
    <div className={styles.app_container}>
      <div className={`${styles.container} ${styles.app}`}>
        <h2>Protect yourself with PureBima Mobile App</h2>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h3>Get the PureBima App Today and enjoy:</h3>
            <ul>
              <li>Compare Different Insurance Policies</li>
              <li>Buy, Save and Share policies anytime anywhere</li>
              <li>Track your policy status on the go</li>
              <li>Download &Access policy anytime</li>
            </ul>
            <h4>Download our app from</h4>
            <div className={styles.links}>
              <a href="#" target="_blank">
                <Image
                  src="/images/Play-Store.png"
                  alt="Google Play"
                  width={200}
                  height={50}
                />
              </a>
              <a href="#" target="_blank">
                <Image
                  src="/images/App-Store.jpeg"
                  alt="App Store"
                  width={200}
                  height={50}
                />
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src="/images/pb-app.png"
              alt="App"
              width={500}
              height={500}
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppSection;
