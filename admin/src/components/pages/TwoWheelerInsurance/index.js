"use client";

import BreadCrumbs from "@/components/BreadCrumbs";
import Faqs from "../Home/Faqs";
import Testimonials from "../Home/Testimonials";
import styles from "./style.module.scss";
import Image from "next/image";
import { useState } from "react";
import Input from "@/components/Input";
import { toast } from "react-toastify";
import { submitApplication } from "@/services/application";

function TwoWheelerInsurance() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        vehicleNumber,
        mobile: mobileNumber,
        category: "Two Wheeler Insurance",
      };
      setSubmitting(true);
      await submitApplication(payload);
      setSubmitting(false);
      toast.success("Your application has been submitted successfully.");
      setMobileNumber("");
      setVehicleNumber("");
    } catch (e) {
      setSubmitting(false);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <BreadCrumbs
        title="Two Wheeler Insurance"
        image="/images/bike.png"
        links={[
          { title: "Two Wheeler Insurance", href: "two-wheeler-insurance" },
        ]}
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
                id={"vehicleNumber"}
                label={"Vehicle Number"}
                type={"text"}
                value={vehicleNumber}
                placeholder={"Enter your vehicle number"}
                onChange={setVehicleNumber}
              />
              <Input
                id={"mobileNumber"}
                label={"Mobile Number"}
                type={"tel"}
                value={mobileNumber}
                placeholder={"Your mobile number"}
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
          Bike insurance, also known as two-wheeler insurance, is an agreement
          between the bike owner and the insurance provider, wherein the insurer
          commits to provide financial compensation for any damages incurred by
          the insured two-wheeler. It basically is a protection against
          unforeseen circumstances including thefts, collisions, or accidents.
          There are three types of bike insurance policies that you can choose
          from, third-party, comprehensive, and standalone own-damage bike
          insurance. A third-party bike insurance is a must-have according to
          the Motor Vehicles Act of 1988.
        </p>
        <div>
          <h2 className="title">Two Wheeler Insurance Types</h2>
          <Tabs />
        </div>
        <div className={styles.details}>
          <h2 className="title">How to Choose Two Wheeler Insurance Policy?</h2>
          <p>
            With so many insurance companies offering two-wheeler insurance
            plans, it often becomes difficult to choose the right one. In order
            to select the best two-wheeler insurance plan, you need to consider
            a number of things. Listed below are some of the factors you need to
            consider while buying bike insurance:
          </p>
          <p>
            1. Know Your Coverage Requirements - Assess your requirements and
            budget so that you can choose between different types of two wheeler
            insurance plans that suit you the best. When assessing your
            requirements, you must consider different factors such as usage of
            your two wheeler, your expenditure, liabilities, etc.
          </p>
          <p>
            2. Choose Add-ons Wisely - Add-on covers help you to enhance the
            coverage of your two wheeler insurance policy. You can opt for an
            add-on cover for your two wheeler insurance policy in exchange of
            extra premium. Common add-on covers in two wheeler insurance are
            zero depreciation cover, personal accident cover for pillion riders,
            and towing cover.
          </p>
          <p>
            3. Choose a Reliable Insurance Company - Checking the claim
            settlement ratio is of utmost importance when choosing a trustworthy
            two wheeler insurance company online. It ensures that the claim
            settlement is hassle-free.
          </p>
          <p>
            4. Compare Two Wheeler Insurance Plans Online - It is important to
            compare different two wheeler insurance policies online in order to
            make the best buying decision. You can compare different plans on
            the basis of inclusions, exclusions, premiums, etc.
          </p>
          <p>
            5. Read Online Reviews - It is important that you read online
            reviews posted by different customers. This will help you in
            choosing the right two-wheeler insurance policy. You must read
            positive as well as negative comments online so that you can decide
            what is best for you.
          </p>
        </div>
        <div className={styles.details}>
          <h2 className="title">
            Importance of two wheeler insurance/ Why do you need two wheeler
            insurance?
          </h2>
          <p>
            Having a two wheeler insurance policy can help you in different
            situations, thus ensuring that you don't have to pay for any legal
            or financial liabilities out of your pocket. Apart from this, two
            wheeler insurance can be beneficial in the below ways.
          </p>
          <h4>Abide with the law</h4>
          <p>
            Buying third party insurance cover is mandatory as per the law.
            Every bike plying on Indian roads has to have a valid third party
            cover. Not buying this type of cover attracts a penalty up to Rs.
            2,000 or even imprisonment in some cases. It is vital to buy or
            renew bike insurance on time to ensure you comply with the law.
          </p>
          <h4>Coverage against financial loss</h4>
          <p>
            Damages caused to your bike due to natural or man made calamities or
            any unforeseen accident can increase your financial burden. Thus,
            with comprehensive insurance cover you can stay protected against
            financial obligations.
          </p>
          <h4>Coverage against man made and natural disasters</h4>
          <p>
            In the event of a natural or man made disaster such as flood,
            cyclone, storm, fire, terrorism, etc. bike insurance can be of great
            help as it offers you coverage against damages caused due to such
            disasters.
          </p>
          <h4>Coverage for bike theft</h4>
          <p>
            In case your bike is stolen then an insurance policy will compensate
            you as per the policy terms and conditions. To claim for bike theft,
            obtaining a non traceable certificate from the police is mandatory.
          </p>
          <h4>Personal accident cover</h4>
          <p>
            Buying personal accident cover which protects the owner/driver
            against death, disability or bodily injury is mandatory. As per the
            law, it is compulsory for every bike owner to get personal accident
            cover up to Rs. 15 lakh.
          </p>
        </div>
      </div>
      <Testimonials />
      <Faqs />
    </div>
  );
}

export const Tabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.tabs}>
      <div className={styles.header}>
        <button
          className={active === 0 ? styles.active : ""}
          onClick={() => setActive(0)}
        >
          Comprehensive Insurance
        </button>
        <button
          className={active === 1 ? styles.active : ""}
          onClick={() => setActive(1)}
        >
          Third Party Insurance
        </button>
        <button
          className={active === 2 ? styles.active : ""}
          onClick={() => setActive(2)}
        >
          Own-Damage Insurance
        </button>
      </div>
      <div className={styles.body}>
        <div>
          <button
            className={active === 0 ? styles.active : ""}
            onClick={() => setActive(0)}
          >
            Comprehensive Insurance
          </button>
          {active === 0 && (
            <div className={styles.tabContent}>
              <p>
                A comprehensive two-wheeler policy gives complete coverage by
                paying your financial liabilities that you may incur towards a
                third party and by providing compensation for expenses arising
                due to own-damages sustained by your bike. This policy shields
                your bike against damages it sustains due to an accident, fire,
                theft, man-made disasters, natural calamities, self-ignition,
                explosion, and so on. You can also enhance its coverage by
                paying an additional premium to purchase add-on covers like zero
                depreciation cover, roadside assistance cover, engine cover,
                etc.
              </p>
            </div>
          )}
        </div>
        <div>
          <button
            className={active === 1 ? styles.active : ""}
            onClick={() => setActive(1)}
          >
            Third Party Insurance
          </button>
          {active === 1 && (
            <div className={styles.tabContent}>
              <p>
                In India, a third-party two-wheeler insurance plan is a
                compulsory requirement to ride a bike. It is also known as
                liability-only policy which covers bodily injuries, temporary or
                permanent disability, and death of the third party person due to
                an accident or a mishap with the involvement of the insured's
                bike. This motorcycle or scooter insurance policy also covers
                the property damage expenses sustained by the third party up to
                Rs. 1 Lakh, but does not cover damages incurred by the insured's
                bike or the insured person.
              </p>
            </div>
          )}
        </div>
        <div>
          <button
            className={active === 2 ? styles.active : ""}
            onClick={() => setActive(2)}
          >
            Own-Damage Insurance
          </button>
          {active === 2 && (
            <div className={styles.tabContent}>
              <p>
                The standalone own-damage two-wheeler insurance policy gives
                coverage for the own-damages sustained by the insured bike due
                to an accident, theft, fire, natural disaster and man-made
                calamity. A standalone own-damage policy provides flexibility to
                policyholders for choosing an insurance company of their choice.
                The policyholders can buy a third-party policy and own-damage
                policy either from the same insurer or a different one. An
                insured individual can expand the coverage of a own-damage
                insurance policy by buying add-on covers.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoWheelerInsurance;
