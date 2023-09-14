import { Link } from "react-router-dom";
import { bannerImg, sliderHover } from "../utils/helper";

const Banner = () => {
  return (
    <article className="flex h-full flex-row items-center justify-between">
      <img src={bannerImg} alt="banner" className="w-1/2" />
      <img
        src={sliderHover}
        alt="hover"
        className="absolute -right-1/2 left-1/2 -translate-x-1/2 animate-pulse"
      />
      <div className="ml-[15%] w-1/2">
        <h1 className="font-serif text-6xl">
          Small Pleasures <br /> From Reprizo
        </h1>
        <p className="pb-6 pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Molestias velit eveniet minus fugit non!
        </p>
        <Link to="contact" className="btn-dark ">
          SHOP NOW
        </Link>
      </div>
    </article>
  );
};

export default Banner;
