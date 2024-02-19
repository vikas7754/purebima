import Link from "next/link";
import styles from "./hero.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Choose Your Insurance, from the below options:</h1>
        <div className={styles.products}>
          <Link href="/two-wheeler-insurance">
            <Image
              src="/images/bike.png"
              alt="Health"
              width={100}
              height={100}
            />
            <span>Two Wheeler Insurance</span>
          </Link>
          <Link href="/car-insurance">
            <Image
              src="/images/car.png"
              alt="Health"
              width={100}
              height={100}
            />
            <span>Car Insurance</span>
          </Link>
          <Link href="/health-insurance">
            <Image
              src="/images/heart.png"
              alt="Health"
              width={100}
              height={100}
            />
            <span>Health Insurance</span>
          </Link>
          <Link href="/view-more">
            <Image
              src="/images/menu.png"
              alt="Health"
              width={100}
              height={100}
            />
            <span>View More</span>
          </Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className={styles.right}>
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image
              src="/images/hero1.jpeg"
              alt="Health"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/hero2.jpeg"
              alt="Health"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/hero3.jpeg"
              alt="Health"
              width={500}
              height={500}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSection;
