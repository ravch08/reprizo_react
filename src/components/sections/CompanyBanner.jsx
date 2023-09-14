import { Link } from "react-router-dom";

const CompanyBanner = () => {
  return (
    <section className="container mx-auto h-1/2 ">
      <div className="bg-companyBanner rounded-md">
        <div className="w-1/2 px-24 py-32">
          <h2 className="text-5xl text-white">The Lawson Collection</h2>
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
