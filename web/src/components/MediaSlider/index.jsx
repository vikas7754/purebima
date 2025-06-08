import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const MediaSlider = ({ media, className }) => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        className={`w-full border border-dashed rounded-md overflow-hidden ${className}`}
      >
        {Array.isArray(media) &&
          media.map((item, index) => (
            <SwiperSlide key={index} className="hover:scale-105 transition-all">
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt={item.alt || "Media"}
                  className="w-full"
                />
              ) : (
                <video
                  src={item.url}
                  alt={item.alt || "Media"}
                  className="w-full"
                  controls
                />
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MediaSlider;
