"use client";

import BreadCrumbs from "@/components/BreadCrumbs";
import Faqs from "../Home/Faqs";
import Testimonials from "../Home/Testimonials";
import styles from "../TwoWheelerInsurance/style.module.scss";
import Image from "next/image";
import { useState } from "react";
import Input from "@/components/Input";
import Link from "next/link";
import { toast } from "react-toastify";
import { submitApplication } from "@/services/application";

const data = [
  {
    heading: "Health Insurance ---",
    content: [
      {
        image: "/images/products/health.png",
        alt: "health insurance",
        text: "1 Cr. Health Cover",
        href: "#",
      },
      {
        image: "/images/products/aarogya.png",
        alt: "health insurance",
        text: "Aarogya",
        href: "#",
      },
      {
        image: "/images/products/family.png",
        alt: "health insurance",
        text: "Family Insurance",
        href: "#",
      },
    ],
  },
  {
    heading: "Investment Plans ---",
    content: [
      {
        image: "/images/products/lic.png",
        alt: "investment plans",
        text: "LIC Plans",
        href: "#",
      },
      {
        image: "/images/products/money.png",
        alt: "investment plans",
        text: "Investment Plans",
        href: "#",
      },
      {
        image: "/images/products/baby.png",
        alt: "investment plans",
        text: "Child Savings Plans",
        href: "#",
      },
      {
        image: "/images/products/money-bag.png",
        alt: "investment plans",
        text: "Guaranteed Return Plans",
        href: "#",
      },
      {
        image: "/images/products/retirement.png",
        alt: "investment plans",
        text: "Retirement Plans",
        href: "#",
      },
      {
        image: "/images/products/taxs.png",
        alt: "investment plans",
        text: "Tax Saving Investment",
        href: "#",
      },
      {
        image: "/images/products/pensions.png",
        alt: "investment plans",
        text: "Pension for life",
        href: "#",
      },
      {
        image: "/images/products/idea.png",
        alt: "investment plans",
        text: "Tax Saving Investment",
        href: "#",
      },
    ],
  },
  {
    heading: "Other Plans ---",
    content: [
      {
        image: "/images/products/pet.png",
        alt: "other plans",
        text: "Pet Insurance",
        href: "#",
      },
      {
        image: "/images/products/plane.png",
        alt: "other plans",
        text: "Travel Insurance",
        href: "#",
      },
      {
        image: "/images/products/group.png",
        alt: "other plans",
        text: "Group Health Insurance",
        href: "#",
      },
      {
        image: "/images/products/cancer.png",
        alt: "other plans",
        text: "Cancer Insurance",
        href: "#",
      },
      {
        image: "/images/products/ulips.png",
        alt: "other plans",
        text: "ULIPs",
        href: "#",
      },
      {
        image: "/images/products/home.png",
        alt: "other plans",
        text: "Home Insurance",
        href: "#",
      },
      {
        image: "/images/products/taxi.png",
        alt: "other plans",
        text: "Taxi Insurance",
        href: "#",
      },
      {
        image: "/images/products/corporate.png",
        alt: "other plans",
        text: "Corporate Insurance",
        href: "#",
      },
    ],
  },
];

function ViewMorePage() {
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
        category: "Other Query",
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
        title="View More"
        image="/images/menu.png"
        links={[{ title: "View More", href: "view-more" }]}
      />
      <div className="wrapper">
        <h2 className="title" style={{ textAlign: "left" }}>
          Kindly fill the form for any of your query:
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
        <div>
          <h2 className="title">PureBima Insurance Products</h2>
          <div className={styles.services}>
            {data.map((item, index) => (
              <div key={index} className={styles.services_container}>
                <h4>{item.heading}</h4>
                <div className={styles.services_wrapper}>
                  {item.content.map((content, index) => (
                    <Link
                      key={index}
                      href={content.href}
                      className={styles.service}
                    >
                      <div className={styles.img}>
                        <Image
                          src={content.image}
                          alt={content.alt}
                          width={200}
                          height={200}
                          style={{ height: "auto" }}
                        />
                      </div>
                      <p>{content.text}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Testimonials />
      <Faqs />
    </div>
  );
}

export default ViewMorePage;
