import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./faqs.module.scss";
import { faArrowUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getFAQs } from "@/services/other";

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
