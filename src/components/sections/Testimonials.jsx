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
        <div className="mx-auto w-3/5 text-center">
          <h2 className="font-serif text-5xl leading-normal">
            Customer Reviews
          </h2>
          <p className="mb-12 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolorem, minus animi veniam rerum natus sed quisquam ut inventore
            modi unde dolore, odio repellat explicabo excepturi pariatur.
          </p>
        </div>

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
