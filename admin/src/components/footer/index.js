import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <p>
            © Copyright 2022-2023 Signior PureBima Insurance Brokers Pvt. Ltd.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
