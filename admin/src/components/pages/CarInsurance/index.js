"use client";

import BreadCrumbs from "@/components/BreadCrumbs";
import Faqs from "../Home/Faqs";
import Testimonials from "../Home/Testimonials";
import styles from "../TwoWheelerInsurance/style.module.scss";
import Image from "next/image";
import { useState } from "react";
import Input from "@/components/Input";
import { toast } from "react-toastify";
import { submitApplication } from "@/services/application";

function CarInsurance() {
  const [carNumber, setCarNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        vehicleNumber: carNumber,
        mobile: mobileNumber,
        category: "Car Insurance",
      };
      setSubmitting(true);
      await submitApplication(payload);
      setSubmitting(false);
      toast.success("Your application has been submitted successfully.");
      setCarNumber("");
      setMobileNumber("");
    } catch (e) {
      setSubmitting(false);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <BreadCrumbs
        title="Car Insurance"
        image="/images/car.png"
        links={[{ title: "Car Insurance", href: "car-insurance" }]}
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
                id={"carNumber"}
                label={"Car Number"}
                type={"text"}
                value={carNumber}
                placeholder={"Kindly add your car number"}
                onChange={setCarNumber}
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
          Car insurance is a type of motor policy which provides protection
          against theft, third-party damages, man-made and natural calamities.
          You can get financial and legal protection against the damages caused
          by your car. A comprehensive car insurance policy also provides
          protection against damages caused to your own car. The Motor Vehicles
          Act of 1988 makes it mandatory for every car owner to insure his car
          with a third-party insurance policy.
        </p>
        <p className={styles.desc}>
          No matter how careful you are while you are driving, mishaps may still
          take place and you may end up paying hefty repair bills. Worried?
          Don’t be, as you can buy a car insurance policy to ensure protection
          for your car against damages. Car insurance which is also known as
          motor insurance, vehicle insurance, or auto insurance is thus very
          important for all car owners. With a car insurance plan, you will get
          coverage if a third-party is damaged due to the insured car. Depending
          on the scope of coverage, there are 3 types of car insurance policies
          – Third-Party Car Insurance, Standalone Own-Damage (OD) Car Insurance,
          and Comprehensive Car Insurance. To continue to avail the benefits of
          these policies, the car insurance renewal should be processed on time
          by policyholders. A third-party car insurance is mandatory as per the
          Motor Vehicles Act of 1988 and provides protection if there is any
          damage to the third-party property. However, a Standalone Own-damage
          car insurance provides financial assistance if there is any damage to
          the insured car. Comprehensive Car Insurance on the other hand
          provides protection for both standalone own-damages and third-party
          damages. Thus, with comprehensive car insurance, if there is any
          damage due to riots, fire, or natural disasters, then this type of car
          insurance plan provides the relevant coverage. You can also include a
          number of add-ons to this plan to enhance the coverage even more. With
          InsuranceDekho, you can buy any of these three types of car insurance
          plans from your preferable car insurance company.
        </p>
        <div>
          <h2 className="title">Car Insurance Types</h2>
          <Tabs />
        </div>
        <div className={styles.details}>
          <h2 className="title">How to Choose Car Insurance Policy Online?</h2>
          <p>
            Buying a car insurance policy may become a challenging task if you
            fail to do proper research. At Insurance, we understand how
            important it is for you to buy the right car insurance plan. So, to
            help you out, we have enlisted some of the tips in which you can buy
            the best car insurance policy online:
          </p>
          <ul>
            <li>
              <strong>Check the Different Car Insurance Types</strong>: With
              three different types of four wheeler insurance available, it is
              crucial to assess your car insurance needs and accordingly
              finalise the type of policy you need. Choose a third-party cover
              if you want to stay legally compliant. On the other hand, choose a
              comprehensive car insurance plan if you want to get complete
              protection for your vehicle. As InsuranceDekho offers three
              different types of car insurance plans, you can easily pick one
              that best suits your needs and budget.
            </li>
            <li>
              <strong>Analyse the Car Insurance Premium</strong>: The premium of
              car insurance depends on a number of factors such as IDV, model,
              fuel type, age, and others, which is why the car insurance premium
              varies from one insurer to another. Moreover, checking four
              wheeler insurance premiums also become important to analyse so
              that you are able to buy a plan that fits your budget. So, it is
              wise to first compare the car insurance premiums and then make the
              final decision.
            </li>
            <li>
              <strong>Check for IDV</strong>: IDV or the Insured Declared Value
              refers to the current market value of your car. As your vehicle
              suffers wear and tear, then the value of your car decreases. It is
              the maximum amount that your insurance company will settle in case
              your car is completely damaged or stolen. The car insurance
              premium is directly proportional to the IDV, which means that the
              higher the IDV, the higher will be the four wheeler insurance
              premium.
            </li>
            <li>
              <strong>Compare Different Plans</strong>: You should compare
              different car insurance plans online. The comparison makes it
              easier to pick the best car insurance plan as per your budget and
              needs. You should analyse the coverage offered under different
              types of four wheeler insurance plans as doing so will help you
              make an informed decision in selecting the right car insurance
              policy for yourself.
            </li>
            <li>
              <strong>Add-ons</strong>: There are a number of add-ons available
              such as zero depreciation cover, no claim bonus, key loss cover,
              engine loss cover, and more that help in enhancing the benefits of
              your car insurance plan even more. So, while buying a car
              insurance plan, you must include a number of add-ons to get
              additional coverage. Once you have rightly selected the four
              wheeler insurance policy, you will be able to get complete
              protection for your car.
            </li>
            <li>
              <strong>Availability of Cashless Garages</strong>: Cashless
              garages in car insurance is helpful for policyholders to get their
              car insurance claims settled in a cashless manner. With the
              availability of more cashless garages with your insurer, it
              becomes easier to get cashless repairs in a hassle-free manner.
              So, always buy a car insurance plan from a company that has
              tie-ups with a large number of cashless garages.
            </li>
            <li>
              <strong>Check Claim Settlement Ratio</strong>: The claim
              Settlement Ratio in four wheeler insurance refers to the
              efficiency of car insurance companies in getting their car
              insurance claims settled. It thus refers to the percentage of
              claims settled by the insurer in a year. So, always look for an
              insurance company that has a simple and swift claim process and
              check their Claim Settlement Ratio (CSR) before finalising. It is
              better to buy a plan from a company with high CSR.
            </li>
            <li>
              <strong>Services Offered</strong>: In addition to the claim
              settlement ratio, you should also check the services offered by
              your four wheeler insurance company. For instance, you must
              understand whether the company offers a quick claim settlement,
              24*7 service, and other services. You should thus choose a company
              that offers hassle-free customer service.
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
  const [active, setActive] = useState(0);
  return (
    <div className={styles.tabs}>
      <div className={styles.header}>
        <button
          className={active === 0 ? styles.active : ""}
          onClick={() => setActive(0)}
        >
          Comprehensive Car Insurance
        </button>
        <button
          className={active === 1 ? styles.active : ""}
          onClick={() => setActive(1)}
        >
          Third Party Car Insurance
        </button>
        <button
          className={active === 2 ? styles.active : ""}
          onClick={() => setActive(2)}
        >
          Own-Damage Car Insurance
        </button>
      </div>
      <div className={styles.body}>
        <div>
          <button
            className={active === 0 ? styles.active : ""}
            onClick={() => setActive(0)}
          >
            Comprehensive Car Insurance
          </button>
          {active === 0 && (
            <div className={styles.tabContent}>
              <p>
                A comprehensive car insurance policy is the most extensive
                insurance cover under which an insurance company is liable to
                pay for financial liabilities incurred towards a third-party as
                well as for the own-damages sustained by the insured's car. In
                addition to road accidents, the policy is applicable in the
                event of natural calamities, man-made disasters, self-ignition
                or lightning, explosion, fire, theft, etc
              </p>
            </div>
          )}
        </div>
        <div>
          <button
            className={active === 1 ? styles.active : ""}
            onClick={() => setActive(1)}
          >
            Third Party Car Insurance
          </button>
          {active === 1 && (
            <div className={styles.tabContent}>
              <p>
                Third-party car insurance policy is a mandatory requirement for
                driving a car in India. It is the most basic insurance plan and
                is thus also called Liability Only Car Insurance Policy. Under
                this cover, the insurance company is liable to pay for the
                bodily injuries, permanent disability, temporary disability as
                well as death of the third party caused by an accident involving
                the insured's car. This plan also provides coverage for property
                damage incurred by the third party up to Rs. 7.5 Lakh.
              </p>
            </div>
          )}
        </div>
        <div>
          <button
            className={active === 2 ? styles.active : ""}
            onClick={() => setActive(2)}
          >
            Own-Damage Car Insurance
          </button>
          {active === 2 && (
            <div className={styles.tabContent}>
              <p>
                In September 2019, the Insurance Regulatory and Development
                Authority of India (IRDAI) introduced the Standalone Own-Damage
                car insurance policy. Under this plan, the insured gets
                insurance coverage only for the own-damages sustained by his/her
                four-wheeler in a road accident, natural/man-made calamity,
                fire, explosion, theft or any other mishap. A standalone
                own-damage car insurance policy aims at offering the insured the
                flexibility in terms of the insurance provider they want to
                choose.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarInsurance;
