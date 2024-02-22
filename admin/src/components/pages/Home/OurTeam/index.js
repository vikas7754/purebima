import styles from "../OurPartners/partners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const teams = [];

function OurTeam() {
  return (
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
  );
}

export default OurTeam;
