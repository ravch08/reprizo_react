import { Link } from "react-router-dom";

const CompanyBanner = () => {
  return (
    <section className="mx-auto h-1/2 md:container ">
      <div className="rounded-md bg-companyBanner bg-center">
        <div className="w-full px-8 py-16 md:px-24 md:py-32 lg:w-1/2">
          <h2 className="font-serif text-5xl leading-normal text-white">
            The Lawson Collection
          </h2>
          <p className="py-8 text-sm text-gray-500">
            Whether you’re about to invest in your first serious watch or
            looking to add to an already impressive collection, the right luxury
            watch acts as a milestone in life: a marker of time well spent. If
            you’re struggling to choose the perfect timepiece then allow us to
            help. Here are the classics we suggest investing in.
          </p>
          <Link to="contact" className="btn-light">
            SHOP COLLECTION
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyBanner;
