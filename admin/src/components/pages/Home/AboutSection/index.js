import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./about.module.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faFileCircleCheck,
  faIndianRupeeSign,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

function AboutSection({ hideHeading = false }) {
  return (
    <div className={styles.container}>
      {!hideHeading && <h2>About PureBima</h2>}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
        mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
        dapibus leo.
      </p>
      <div className={styles.cards}>
        <div>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            <h4>High Customer Base</h4>
            <p>trust us & have bought their insurance on PurePima</p>
          </div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faFileCircleCheck} />
          </div>
          <div>
            <h4>50+ Insurers</h4>
            <p>
              partnered with us so that you can compare easily & transparently
            </p>
          </div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faIndianRupeeSign} />
          </div>
          <div>
            <h4>Best Price</h4>
            <p>for all kinds of insurance plans available on our website</p>
          </div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faShieldHeart} />
          </div>
          <div>
            <h4>Claims</h4>
            <p>
              support built in with every policy for help, when you need it the
              most
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
