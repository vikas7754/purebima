"use client";

import BreadCrumbs from "@/components/BreadCrumbs";
import Faqs from "../Home/Faqs";
import styles from "./style.module.scss";
import Input from "@/components/Input";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faChess,
  faCreditCard,
  faGraduationCap,
  faHeadset,
  faIdCard,
  faIdCardClip,
  faIndianRupeeSign,
  faMobile,
  faMoneyBill,
  faMugHot,
  faSpinner,
  faVideo,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faFlag, faUser } from "@fortawesome/free-regular-svg-icons";

function BecomePOSP() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, subject });
  };
  return (
    <div>
      <BreadCrumbs
        title="Become Our POSP"
        links={[{ title: "Become Our POSP", href: "/become-our-posp" }]}
      />
      <div className={styles.main + " wrapper"}>
        <div className={styles.left}>
          <h2>Be your own boss with Zero Investment</h2>
          <h4>Become POSP insurance agent today</h4>
          <form onSubmit={handleSubmit}>
            <Input
              id={"firstName"}
              type="text"
              placeholder="First Name"
              label="First name here"
              onChange={setFirstName}
            />
            <Input
              id={"lastName"}
              type="text"
              placeholder="Last Name"
              label="Last name here"
              onChange={setLastName}
            />
            <Input
              id={"email"}
              type="email"
              placeholder="Email"
              label="Email here"
              onChange={setEmail}
            />
            <Input
              id={"subject"}
              type="text"
              placeholder="Subject"
              label="Subject here"
              onChange={setSubject}
            />
            <div className={styles.submit}>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
              >
                {submitting ? (
                  <>
                    <span>Submitting...</span>
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </>
                ) : (
                  "Submit Details"
                )}
              </button>
            </div>
          </form>
          <div className={styles.benefits}>
            <div>
              <div>
                <FontAwesomeIcon icon={faIndianRupeeSign} />
              </div>
              <p>Earn up to ₹85k* in commissions every month</p>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <p>Start earning within 24 hours from registration</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src="/images/posp.jpeg"
            alt="Become POSP"
            width={500}
            height={500}
            style={{ height: "auto" }}
          />
        </div>
      </div>
      <div className={styles.bg}>
        <div className="wrapper">
          <h2>What is POSP (Point of Sales Person)</h2>
          <p>
            A POSP or Point of Sales Person is one who is responsible for
            selling different types of insurance products such as health
            insurance, car insurance, life insurance, and more. To become a POSP
            insurance agent, you must be at least 18 years of age and need to
            complete IRDAI certified course.
          </p>
        </div>
      </div>
      <div className={styles.bestIn + " wrapper"}>
        <h2>Best-In-Class Benefits with PureBima</h2>
        <p>When you work with PureBima, you will get Best-In-Class Benefits:</p>
        <div className={styles.bestin_benefits}>
          <div>
            <div>
              <FontAwesomeIcon icon={faMoneyBill} />
            </div>
            <h4>Timely Payouts</h4>
            <p>Receive payments on time without any delays</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faMobile} />
            </div>
            <h4>No paperwork</h4>
            <p>100% digital process</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faVideo} />
            </div>
            <h4>Professional trainings</h4>
            <p>Get trained by industry experts</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <h4>Dedicated Support</h4>
            <p>
              Get assistance on all the 7 days for policy issuance and claim
              assistance
            </p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <h4>No capping on earning</h4>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faMugHot} />
            </div>
            <h4>Work flexible from anywhere & anytime</h4>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faChess} />
            </div>
            <h4>Enjoy Income from your existing customer base</h4>
          </div>
        </div>
      </div>
      <div className={styles.bg}>
        <div className="wrapper">
          <h2>Eligibility to work as a Point-Of-Sale (POSP)</h2>
          <p>
            Planning to become a POSP insurance agent? Then appear for the
            15-hour mandatory POSP exam, and become a POSP with us.
          </p>
          <div className={styles.eligibilities}>
            <div>
              <div>
                <FontAwesomeIcon icon={faFlag} />
              </div>
              <p>Resident of India</p>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <p>Person should be of 18 years or more</p>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <p>Minimum educational qualification is 10th</p>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faIdCard} />
              </div>
              <p>Person has to produce Aadhar Card & PAN Card</p>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faBuildingColumns} />
              </div>
              <p>
                Bank Account with cancelled cheque or 6 month bank statement.
              </p>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faIdCardClip} />
              </div>
              <p>Not a POSP of any other Organisation</p>
            </div>
          </div>
        </div>
      </div>
      <Faqs />
    </div>
  );
}

export default BecomePOSP;
