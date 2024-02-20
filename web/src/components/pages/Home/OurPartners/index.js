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

function OurPartners() {
  return (
    <>
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
    </>
  );
}

export default OurPartners;
