import styles from "./testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getTestimonials } from "@/services/other";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const fetchTestimonials = async () => {
    try {
      const { data } = await getTestimonials();
      setTestimonials(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Customer Testimonials</h2>
      <div>
        <Swiper
          spaceBetween={4}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className={styles.testimonial}>
                <p>{testimonial.message}</p>
                <div className={styles.content}>
                  <div className={styles.image}>
                    <img
                      src={testimonial?.image || "/images/default.svg"}
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
