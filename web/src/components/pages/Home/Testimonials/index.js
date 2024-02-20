import styles from "./testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    _id: 1,
    name: "John Doe",
    title: "CEO",
    image: "https://via.placeholder.com/150",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam vitae, at amet, auctor. Nulla",
  },
  {
    _id: 2,
    name: "John Doe",
    title: "CEO",
    image: "https://via.placeholder.com/150",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam vitae, at amet, auctor. Nulla",
  },
  {
    _id: 3,
    name: "John Doe",
    title: "CEO",
    image: "https://via.placeholder.com/150",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam vitae, at amet, auctor. Nulla",
  },
  {
    _id: 4,
    name: "John Doe",
    title: "CEO",
    image: "https://via.placeholder.com/150",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam vitae, at amet, auctor. Nulla",
  },
];

function Testimonials() {
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
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.title}</p>
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
