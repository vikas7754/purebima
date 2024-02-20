import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./faqs.module.scss";
import { faArrowUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const faqs = [
  {
    _id: 1,
    question: "What is PureBima?",
    answer:
      "PureBima is a digital insurance platform that provides a wide range of insurance products to individuals and businesses. We offer a variety of insurance products including motor, health, travel, life, and home insurance.",
  },
  {
    _id: 2,
    question: "How do I buy insurance on PureBima?",
    answer:
      "You can buy insurance on PureBima by visiting our website and selecting the insurance product you want to purchase. You can then fill out the necessary information and make a payment to complete the purchase.",
  },
  {
    _id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods including credit/debit cards, mobile money, and bank transfers.",
  },
  {
    _id: 4,
    question: "How do I make a claim?",
    answer:
      "You can make a claim by visiting our website and filling out the necessary information. You can also contact our customer support team for assistance with making a claim.",
  },
  {
    _id: 5,
    question: "How do I contact PureBima?",
    answer:
      "You can contact PureBima by visiting our website and filling out the contact form. You can also send us an email at",
  },
];

function Faqs() {
  const [active, setActive] = useState(null);
  const handleClick = (e, i) => {
    e.preventDefault();
    if (active === i) {
      setActive(null);
    } else {
      setActive(i);
    }
  };
  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqs}>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.faq}>
            <h3
              className={`${styles.question} ${i === active && styles.active}`}
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
  );
}

export default Faqs;
