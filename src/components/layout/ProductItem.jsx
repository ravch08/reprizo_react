import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Rating } from "../utils/helper";

const ProductItem = ({ title, img, price, priceCrossed, discount, rating }) => {
  return (
    <Link to="#!" className="w-1/4">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="discount">-{discount}%</div>
      <h3>{title}</h3>
      <Rating rating={rating} />
      <div className="flex flex-row gap-4">
        <span>{priceCrossed}</span>
        <span>{price}</span>
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
  priceCrossed: PropTypes.string.isRequired,
};

export default ProductItem;
