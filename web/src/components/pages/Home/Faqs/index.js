import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./faqs.module.scss";
import { faArrowUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getFAQs } from "@/services/other";
import Head from "next/head";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What do you mean by Insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Insurance is a contract which is presented as a policy to be used as a risk management tool to ensure financial protection at the time of crisis. Insurance helps an individual to ensure financial protection against losses that may arise during an unforeseen event.",
      },
    },
    {
      "@type": "Question",
      name: "Why is insurance important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unfortunate events like accidents, illnesses, and natural disasters come without any warning and thus it is necessary for you to keep yourself and your loved ones shielded against such unforeseen happenings. One of the best and simplest ways of keeping yourself secured against these contingent events which may cause a financial loss is buying an insurance policy.",
      },
    },
    {
      "@type": "Question",
      name: "How Does Insurance Work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As mentioned earlier, insurance is a legal contract between the policyholder and the insurance provider. The insurance policy carries all the details about the aspects and conditions under which the insurance provider will pay out the insurance amount to the policyholder or their nominee in case an unforeseen event occurs. Insurance is a financial tool which helps in ensuring financial protection of yourself and your family. Generally, the person who has purchased the policy also known as policyholder has to pay premiums for the coverage available under the insurance policy. Any person can seek insurance from an insurance company.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of insurance do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PureBima Insurance provides insurance coverage for Health Insurance, Motor Insurance, Private Car Insurance, Two-Wheeler Insurance, Travel Insurance, Home Insurance.",
      },
    },
    {
      "@type": "Question",
      name: "How do I file a claim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are many ways to file a claim: 1. Online at PureBima website 2. Through your independent agent 3. Calling Pure Bima directly at contact number",
      },
    },
  ],
};

function Faqs() {
  const [faqs, setFaqs] = useState([]);
  const [active, setActive] = useState(null);
  const handleClick = (e, i) => {
    e.preventDefault();
    if (active === i) {
      setActive(null);
    } else {
      setActive(i);
    }
  };

  const fetchFaqs = async () => {
    try {
      const { data } = await getFAQs();
      setFaqs(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchFaqs();
  }, []);
  return (
    <>
      <Head>
        <title>About Us</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqs}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faq}>
              <h3
                className={`${styles.question} ${
                  i === active && styles.active
                }`}
                onClick={(e) => handleClick(e, i)}
              >
                <span>{faq.question}</span>
                <FontAwesomeIcon
                  icon={active === i ? faArrowUp : faChevronDown}
                />
              </h3>
              <div
                className={`${styles.answer_container} ${
                  i === active && styles.active
                }`}
              >
                <p className={`${styles.answer}`}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faqs;
