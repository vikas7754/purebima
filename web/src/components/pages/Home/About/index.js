import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./about.module.scss";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div></div>
        <div>
          <span>Get a quote</span>
          <h2>
            Compare <big>quotes and get life insurance</big> in right way
          </h2>
          <span>Reliable. Personable. Fast.</span>
          <p>
            Get a free insurance quote with PureBima. We help you find any
            insurance coverages that are right for you, so you're not paying for
            anything you don't want!
          </p>
          <p>
            Get a <big>insurance quote</big> - typically in 2 minutes or less.
            Switch to PureBima for an insurance policy from a brand you can
            trust.
          </p>
          <p>Facing any problem to get a quote!</p>
          <a href="tel:+917042127003">
            <FontAwesomeIcon icon={faPhoneVolume} />
            <span>Call: +91 7042127003</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
