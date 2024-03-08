import Link from "next/link";
import styles from "./style.module.scss";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function BreadCrumbs({ links = [], title, image }) {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.wrapper}>
          {image && (
            <img
              src={image}
              alt={title}
              width={100}
              height={100}
              style={{ width: "auto" }}
            />
          )}
          <h1>{title}</h1>
        </div>
      </div>
      {links.length > 0 && (
        <div className={styles.wrapper}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            {links.map((link, i) => (
              <Fragment key={i}>
                <FontAwesomeIcon icon={faChevronRight} />
                <Link href={link.href}>{link.title}</Link>
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BreadCrumbs;
