import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getProducts } from "../../services/apiProducts";
import { Loading, ProductItem } from "../utils/helper";

const Bestsellers = () => {
  const [curPage, setCurPage] = useState(1);
  const [prodPerPage, setProdPerPage] = useState(4);

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return;

  if (error) {
    console.error(error);
    throw new Error("Could not load Products!");
  }

  console.log(data);

  const numOfPages = data.length / prodPerPage;
  const indexOfLastProduct = curPage * prodPerPage;
  const indexOfFirstProduct = indexOfLastProduct - prodPerPage;

  let activeProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const pagesArray = [...Array(numOfPages + 1).keys()].slice(1);

  function handleBtnPrev() {
    if (curPage <= 1) setCurPage(numOfPages);
    else setCurPage((prev) => prev - 1);
  }

  function handleBtnNext() {
    if (curPage >= numOfPages) setCurPage(1);
    else setCurPage((prev) => prev + 1);
  }

  return (
    <section className="mt-24 bg-zinc-100">
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

        <div className="grid grid-cols-4 gap-8">
          {isLoading ? (
            <Loading />
          ) : (
            activeProducts?.map((productItem) => (
              <ProductItem
                key={productItem.id}
                img={productItem.img}
                title={productItem.title}
                price={productItem.price}
                rating={productItem.rating}
                discount={productItem.discount}
                priceCrossed={productItem.priceCrossed}
              />
            ))
          )}
        </div>

        <div className="mt-16 flex flex-row items-center justify-center gap-4">
          <button className="btn-page" onClick={handleBtnPrev}>
            Prev
          </button>
          {pagesArray.map((page) => (
            <button
              key={page}
              onClick={() => setCurPage(page)}
              className={curPage === page ? "actived btn-page" : "btn-page"}
            >
              {page}
            </button>
          ))}
          <button className="btn-page" onClick={handleBtnNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
