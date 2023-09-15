import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Rating } from "../utils/helper";

const ProductItem = ({ title, img, price, priceCrossed, discount, rating }) => {
  return (
    <Link
      to="#!"
      className="relative rounded-md bg-white shadow-lg transition-all duration-500 ease-in-out hover:scale-95 hover:shadow-none"
    >
      <figure className="overflow-hidden rounded-md">
        <img
          src={img}
          alt={title}
          className="scale-75 transition-transform duration-500 ease-in-out hover:scale-90"
        />
      </figure>
      <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm text-white">
        -{discount}%
      </div>
      <div className="py-4 pb-8 pt-6 text-center">
        <h3 className="font-sans text-sm uppercase ">{title}</h3>
        <Rating rating={rating} />
        <div className="text-center text-sm ">
          <span className="mr-2 text-zinc-400 line-through">
            {priceCrossed ? `$${priceCrossed}` : null}
          </span>
          <span className="text-zinc-800 ">${price}</span>
        </div>
      </div>
    </Link>
  );
};

ProductItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  priceCrossed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default ProductItem;
