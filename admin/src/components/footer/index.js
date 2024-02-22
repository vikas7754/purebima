import Link from "next/link";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <div>
              <h3>About PUREBIMA</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div>
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link href="/two-wheeler-insurance">
                    Two Wheeler Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/car-insurance">Car Insurance</Link>
                </li>
                <li>
                  <Link href="/health-insurance">Health Insurance</Link>
                </li>
                <li>
                  <Link href="/view-more">View More Products</Link>
                </li>
                <li>
                  <Link href="/become-our-posp">Become our POSP</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3>Other(s)</h3>
              <ul>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/cancellation-refund">Cancellation & Refund</Link>
                </li>
                <li>
                  <Link href="/grievance-redressal">Grievance Redressal</Link>
                </li>
              </ul>
            </div>
            <div className={styles.getInTouch}>
              <h3>Get In Touch</h3>
              <p>
                <span>Address:</span> 717, 7th Floor, Tower B, Advent Tower,
                Sector - 142 Noida - 201301
              </p>
              <p>
                <span>Email:</span>
                <a href="mailto:care@purebima.com">care@purebima.com</a>
              </p>
              <p>
                <span>Phone:</span>
                <a href="tel:+911234567890">+91 1234567890</a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.social}></div>
        <div>
          <p>
            **Discount is offered by the Insurance company as approved by IRDAI
            for the product under File & Use guidelines on the basis of your
            profile Signior PureBima Insurance Brokers Pvt. Ltd. | CIN:
            U67190DL2023PTC409679 | Registered Office - 717, 7th Floor, Tower B,
            Advent Tower, Sector - 142, Noida - 201301 Tel no. : +91 1234567890
            | Email ID: care@purebima.com
          </p>
        </div>
        <div>
          <p>
            Disclaimer: Insurance is the Subject matter of Solicitation. For
            more details on risk factors, Terms & Conditions please read the
            sales brochure carefully before purchasing the policy.
          </p>
        </div>
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
