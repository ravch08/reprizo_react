import ProductItem from "../layout/ProductItem";
import { productItems } from "../utils/data";

const Bestsellers = () => {
  return (
    <section className="mt-24 bg-zinc-50">
      <div className="container">
        <div className="mx-auto w-3/5 text-center">
          <h2 className="font-serif text-5xl leading-normal">
            Our Bestsellers
          </h2>
          <p className="mb-12 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolorem, minus animi veniam rerum natus sed quisquam ut inventore
            modi unde dolore, odio repellat explicabo excepturi pariatur.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-evenly space-x-8">
          {productItems?.map((productItem) => (
            <ProductItem
              key={productItem.id}
              img={productItem.img}
              title={productItem.title}
              price={productItem.price}
              rating={productItem.rating}
              discount={productItem.discount}
              priceCrossed={productItem.priceCrossed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
