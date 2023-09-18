import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { useQuery } from "@tanstack/react-query";
import { getClients } from "../../services/apiClients";
import { ClientProps } from "../../types/types";
import Loading from "../layout/Loading";

const Clients = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });

  if (error) {
    console.error(error);
    throw new Error("Could not load clients!");
  }

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
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((item: ClientProps) => (
              <SwiperSlide key={item.id}>
                <img src={item.img} alt="client" />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </article>
  );
};

export default Clients;
