import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonialItems } from "../utils/data";

import "swiper/css";
import "swiper/css/navigation";
import TestimonialItem from "../layout/TestimonialItem";

const Testimonials = () => {
  return (
    <section>
      <div className="container text-center">
        <h2 className="mb-12 font-serif text-5xl">Customer Reviews</h2>

        <Swiper
          loop={true}
          speed={1500}
          effect={"fade"}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          navigation={true}
          centeredSlides={true}
          modules={[Navigation]}
        >
          {testimonialItems?.map((testimonialItem) => (
            <SwiperSlide key={testimonialItem.id}>
              <TestimonialItem
                img={testimonialItem.img}
                name={testimonialItem.name}
                quote={testimonialItem.quote}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
