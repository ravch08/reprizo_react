import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { clientItems } from "../utils/data";

const Clients = () => {
  return (
    <article>
      <div className="container mb-8">
        <Swiper
          loop={true}
          speed={1500}
          spaceBetween={30}
          grabCursor={true}
          modules={[Autoplay]}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            350: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
        >
          {clientItems?.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt={item.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
};

export default Clients;
