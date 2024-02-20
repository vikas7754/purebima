import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./about.module.scss";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className={styles.container}>
      <div></div>
      <div>
        <span>Get a quote</span>
        <h2>
          Compare <big>quotes and get life insurance</big> in right way
        </h2>
        <span>Reliable. Personable. Fast.</span>
        <p>
          Start a fast, free auto insurance quote with Alico. We help you find
          any insurance coverages that are right for you, so you're not paying
          for anything you don't want!
        </p>
        <p>
          Get a <big>insurance quote</big> - typically in 2 minutes or less.
          Switch to Alico for an insurance policy from a brand you can trust.
        </p>
        <p>Facing any problem to get a quote!</p>
        <a href="tel:+911234567890">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <span>Call: +91 1234567890</span>
        </a>
      </div>
    </div>
  );
}

export default About;
