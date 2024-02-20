import styles from "./partners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const partners = [
  {
    name: "Bajaj Allianz",
    image: "/images/partners/bajaj-allianz.jpg",
  },
  {
    name: "Care Health",
    image: "/images/partners/care-health.jpg",
  },
  {
    name: "Go Digit",
    image: "/images/partners/go-digit.jpg",
  },
  {
    name: "HDFC Ergo",
    image: "/images/partners/hdfc-ergo.jpg",
  },
  {
    name: "ICICI Lombard",
    image: "/images/partners/icici-lombard.jpg",
  },
  {
    name: "Royal Sundaram",
    image: "/images/partners/royal-sundaram.jpg",
  },
  {
    name: "Sbi General",
    image: "/images/partners/sbi-general.jpg",
  },
  {
    name: "Star Health",
    image: "/images/partners/star-health.jpg",
  },
];

const teams = [];

function OurPartners() {
  return (
    <>
      <div className={styles.container}>
        <h2>Our Team</h2>
        <div className={styles.content}>
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              450: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {teams.map((team, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={team.image}
                  alt={team.name}
                  width={500}
                  height={500}
                  style={{ height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.container}>
        <h2>Our Partners</h2>
        <div className={styles.content}>
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              450: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {partners.map((partner, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={500}
                  height={200}
                  style={{ height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.app_container}>
        <div className={`${styles.container} ${styles.app}`}>
          <h2>Protect yourself with PureBima Mobile App</h2>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <h3>Get the PureBima App Today and enjoy:</h3>
              <ul>
                <li>Compare Different Insurance Policies</li>
                <li>Buy, Save and Share policies anytime anywhere</li>
                <li>Track your policy status on the go</li>
                <li>Download &Access policy anytime</li>
              </ul>
              <h4>Download our app from</h4>
              <div className={styles.links}>
                <a href="#" target="_blank">
                  <Image
                    src="/images/Play-Store.png"
                    alt="Google Play"
                    width={200}
                    height={50}
                  />
                </a>
                <a href="#" target="_blank">
                  <Image
                    src="/images/App-Store.jpeg"
                    alt="App Store"
                    width={200}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <div className={styles.right}>
              <Image
                src="/images/pb-app.png"
                alt="App"
                width={500}
                height={500}
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPartners;
