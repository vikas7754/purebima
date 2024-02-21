"use client";

import BreadCrumbs from "@/components/BreadCrumbs";
import Faqs from "../Home/Faqs";
import Testimonials from "../Home/Testimonials";
import styles from "./style.module.scss";

function TwoWheelerInsurance() {
  return (
    <div>
      <BreadCrumbs
        title="Two Wheeler Insurance"
        image="/images/bike.png"
        links={[
          { title: "Two Wheeler Insurance", href: "two-wheeler-insurance" },
        ]}
      />
      <div></div>
      <Testimonials />
      <Faqs />
    </div>
  );
}

export default TwoWheelerInsurance;
