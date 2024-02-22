"use client";

import BreadCrumbs from "@/components/BreadCrumbs";
import Faqs from "../Home/Faqs";
import Testimonials from "../Home/Testimonials";
import styles from "../TwoWheelerInsurance/style.module.scss";
import Image from "next/image";
import { useState } from "react";
import Input from "@/components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { submitApplication } from "@/services/application";

function HealthInsurance() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        firstName,
        lastName,
        dob,
        mobile: mobileNumber,
        category: "Health Insurance",
      };
      setSubmitting(true);
      await submitApplication(payload);
      setSubmitting(false);
      toast.success("Your application has been submitted successfully.");
      setFirstName("");
      setLastName("");
      setDob("");
      setMobileNumber("");
    } catch (e) {
      setSubmitting(false);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <BreadCrumbs
        title="Health Insurance"
        image="/images/heart.png"
        links={[{ title: "Health Insurance", href: "health-insurance" }]}
      />
      <div className="wrapper">
        <h2 className="title" style={{ textAlign: "left" }}>
          Submit the details, Get the Quote...
        </h2>
        <div className={styles.main}>
          <div className={styles.image}>
            <Image
              src="/images/leads.jpg"
              alt="bike insurance"
              width={400}
              height={400}
              style={{ height: "auto" }}
            />
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <Input
                id={"firstName"}
                label={"First Name"}
                type={"text"}
                value={firstName}
                placeholder={"First name here"}
                onChange={setFirstName}
              />
              <Input
                id={"lastName"}
                label={"Last Name"}
                type={"text"}
                value={lastName}
                placeholder={"Last name here"}
                onChange={setLastName}
              />
              <Input
                id={"dob"}
                label={"Date of Birth"}
                type={"date"}
                value={dob}
                placeholder={"Date of Birth"}
                onChange={setDob}
              />
              <Input
                id={"mobileNumber"}
                label={"Mobile Number"}
                type={"tel"}
                value={mobileNumber}
                placeholder={"Enter your mobile number"}
                onChange={setMobileNumber}
              />
              <div className={styles.submit}>
                <button
                  className="btn-primary"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Details & Send OTP"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className={styles.desc}>
          Medical inflation is on a rise. Lifestyle diseases are increasing too.
          Getting hospitalized on an emergency basis without having health cover
          can exhaust your savings in no time. Buying a mediclaim policy can
          provide you with the required financial assistance in case of
          hospitalization. The policy provides coverage against medical expenses
          that you may incur during the policy period. With a valid mediclaim,
          you can also receive tax benefits under section 80D of the Income Tax
          Act, 1961.
        </p>
        <p className={styles.desc}>
          Health insurance is an agreement between the insurer and the
          policyholder whereby an insurance company agrees to reimburse for
          medical costs incurred by the policyholder during the tenure of the
          policy. According to the policy terms, the insured may incur medical
          expenses if they get ill or meet an unfortunate accident that leads to
          treatment at the hospital. To avail of the coverage benefits of health
          insurance policy, the policyholder must pay a specific amount
          periodically, called a premium. The premium is determined by the
          insurance company and must be paid by the policyholders without any
          fail either monthly, quarterly, half-yearly or annually.
        </p>
        <div>
          <h2 className="title">
            Importance of Health Insurance Plans in India
          </h2>
          <p className={styles.desc}>
            With rising healthcare expenses, access to high-quality medical
            treatment can drain your finances. Thus, to protect yourself and
            your loved ones financially against any critical illness every
            citizen must get insured under a reliable health insurance plan.
            Here are the top reasons why you should get coverage as early as
            possible:
          </p>
          <Tabs />
        </div>
        <div className={styles.details}>
          <h2 className="title">
            Why Should You Buy Health Insurance Plan in India?
          </h2>
          <p>
            In today's uncertain times and with changing lifestyles, you may
            never know when a medical emergency will knock on your door. To stay
            protected against such unpredictabilities, it is very important to
            stay secure with health insurance. There are a number of other
            reasons why you should buy this plan. Some of them are listed below:
          </p>
          <ul>
            <li>
              <strong>Rising Medical Expenses: </strong>Over the years, the cost
              of healthcare in India has witnessed a sharp rise so much so that
              it becomes difficult to access quality medical assistance. The
              increase in the cost of medicines, hospitalisation, medical
              examinations, and more have together led to an increase in medical
              expenses. With this rise in medical expenses, it makes all the
              more sense to buy a health insurance plan that helps you stay
              protected against such medical emergencies. Depending on your
              healthcare needs, buy a suitable plan for yourself and your loved
              ones.
            </li>
            <li>
              <strong>Altering Lifestyle: </strong>The current-day modern
              lifestyle is such that individuals have been exposed to health
              problems even more. The 9-5 job, eating habits, disrupted sleep
              cycle, and more have together contributed to an unhealthy
              lifestyle. Due to the unhealthy lifestyle, a number of health
              problems such as obesity, asthma, have constantly been rising.
              Moreover, apart from physical problems, the unhealthy lifestyle
              has also led to increased mental health problems. Thus, due to all
              of these reasons, it becomes all the more important to buy health
              plan in India.
            </li>
            <li>
              <strong>Tax Benefits: </strong>A plan like health insurance not
              only protected you from medical emergencies but also provides tax
              benefits. It is the premium that is paid towards such plans that
              offer tax benefits under the Income Tax Act of 1961. The tax
              benefits vary from one group to another, for instance, the tax
              benefits for senior citizens are higher as compared to the others.
              Policyholders can avail of maximum benefit of Rs. 75,000 against
              their policy.
            </li>
            <li>
              <strong>Network Hospitals: </strong>Network hospitals or cashless
              hospitals are those where policyholders can avail of cashless
              treatment. The number of network hospitals varies from one health
              insurance company to another. Thus, it is important that you check
              the availability of network hospitals while buying the plans. With
              the availability of network hospitals, it becomes easier to avail
              of quick and cashless claims.
            </li>
            <li>
              <strong>Pre-existing Disease Coverage: </strong>Health insurance
              plans also offer coverage for pre-existing diseases after a
              specific waiting period. However, if you want to get coverage for
              these pre-existing conditions like diabetes, hypertension, and
              more, you can also buy a plan that offers coverage for
              pre-existing diseases from the start. You can also check with your
              insurer regarding the coverage for pre-existing diseases in your
              mediclaim plan.
            </li>
            <li>
              <strong>Pre and Post Hospitalisation Expenses: </strong>With a
              number of health insurance policies available in India, you will
              also get coverage for pre and post-hospitalisation expenses. Once
              you are insured with a relevant type of plan, you can enjoy
              financial coverage for both pre and post hospitalisation.
            </li>
            <li>
              <strong>Covid-19: </strong>Over the years, we all have seen how
              the global pandemic had altered our lifestyle. It has affected
              well-being so much that people have now become more and more
              inclined towards buying health plans. Most of the these plans now
              offer coverage for COVID-19.
            </li>
            <li>
              <strong>Variety of Health Insurance: </strong>There are a variety
              of health insurance plans available such as individual plans,
              senior citizen, family health insurance, and many more. With
              different types of plans availablle, you can pick a desired type
              of plan based on your requirements and budget.
            </li>
            <li>
              <strong>Provides Additional Discounts: </strong>On buying health
              insurance, you can also get several types of discounts such as
              wellness discounts, renewal discounts, and more. This means that
              you can save a lot of money and avail discounts once you have
              bought health insurance plans.
            </li>
            <li>
              <strong>Ensures Peace of Mind: </strong>When you know you and your
              loved ones are protected against any kind of medical emergency, it
              will ensure a great sense of relief for you. Thus, on buying
              health insurance plans, you can stay stress-free and focus more
              and more on getting quality treatment.
            </li>
          </ul>
        </div>
      </div>
      <Testimonials />
      <Faqs />
    </div>
  );
}

export const Tabs = () => {
  const [active, setActive] = useState(null);
  return (
    <div className={styles.tabs}>
      <div className={styles.content}>
        <div>
          <button
            className={active === 0 ? styles.active : ""}
            onClick={() => setActive(active === 0 ? null : 0)}
          >
            <FontAwesomeIcon icon={active === 0 ? faCaretDown : faCaretRight} />
            <span>To protect your savings</span>
          </button>
          {active === 0 && (
            <div className={styles.tabContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          )}
        </div>
        <div>
          <button
            className={active === 1 ? styles.active : ""}
            onClick={() => setActive(active === 1 ? null : 1)}
          >
            <FontAwesomeIcon icon={active === 1 ? faCaretDown : faCaretRight} />
            <span>To deal with medical inflation</span>
          </button>
          {active === 1 && (
            <div className={styles.tabContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          )}
        </div>
        <div>
          <button
            className={active === 2 ? styles.active : ""}
            onClick={() => setActive(active === 2 ? null : 2)}
          >
            <FontAwesomeIcon icon={active === 2 ? faCaretDown : faCaretRight} />
            <span>Lifestyle Changes</span>
          </button>
          {active === 2 && (
            <div className={styles.tabContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;
