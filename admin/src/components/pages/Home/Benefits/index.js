import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./benefits.module.scss";
import {
  faHeadset,
  faIndianRupeeSign,
  faShieldHalved,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

function Benefits() {
  return (
    <div className={styles.container}>
      <div className={styles.bgOverlay}></div>
      <div className={styles.content}>
        <h2>Benefits with PureBima</h2>
        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <div>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
            </div>
            <div>
              <h3>Guaranteed Best Price</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className={styles.benefit}>
            <div>
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <div>
              <h3>Expert Advice</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className={styles.benefit}>
            <div>
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <div>
              <h3>100% Trusty & Reliable</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className={styles.benefit}>
            <div>
              <FontAwesomeIcon icon={faShieldHeart} />
            </div>
            <div>
              <h3>Claims Support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
