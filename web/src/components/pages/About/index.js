"use client";
import Image from "next/image";
import AboutSection from "../Home/AboutSection";
import HowItWorks from "../Home/HowItWorks";
import OurPartners from "../Home/OurPartners";
import styles from "./about.module.scss";
import OurTeam from "../Home/OurTeam";
import BreadCrumbs from "@/components/BreadCrumbs";

function AboutusPage() {
  return (
    <div>
      <BreadCrumbs
        title="About Us"
        links={[{ title: "About Us", href: "/about-us" }]}
      />
      <AboutSection hideHeading={true} />
      <div className={styles.container}>
        <div>
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div>
          <h2>What We Do</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className={styles.bg}>
        <h2>Foundation of Our Strength</h2>
        <div className={styles.container}>
          <div className={styles.strengths}>
            <div>
              <Image
                src="/images/future.png"
                alt="purebima"
                width={100}
                height={100}
                style={{ height: "auto" }}
              />
              <h4>Technology</h4>
            </div>
            <div>
              <Image
                src="/images/digital-transformation.png"
                alt="purebima"
                width={100}
                height={100}
                style={{ height: "auto" }}
              />
              <h4>Hybrid Model</h4>
            </div>
          </div>
          <div className={styles.strengths}>
            <div>
              <Image
                src="/images/design.png"
                alt="purebima"
                width={100}
                height={100}
                style={{ height: "auto" }}
              />
              <h4>Custom Products</h4>
            </div>
            <div>
              <Image
                src="/images/feedback.png"
                alt="purebima"
                width={100}
                height={100}
                style={{ height: "auto" }}
              />
              <h4>Partners</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <Image
            src="/images/about-us2.png"
            alt="purebima"
            width={500}
            height={500}
            style={{ height: "auto" }}
          />
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div>
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div>
            <Image
              src="/images/about-us1.png"
              alt="purebima"
              width={500}
              height={500}
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>
      <HowItWorks />
      <div className={styles.bg}>
        <OurPartners />
      </div>
      <OurTeam />
      <div className={styles.bg}>
        <div className={styles.container}>
          <div>
            <h2>Our POSP Presence</h2>
            <p>Coming soon...</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusPage;
