import { Link } from "react-router-dom";
import { aboutCompany } from "../utils/helper";

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="w-full lg:w-1/3">
          <h2 className="font-serif text-5xl leading-normal">
            Professional Watch Repair Services
          </h2>
          <p className="py-8">
            Reprizo is a family-owned professional watch and jewelry repair
            store chain located in New York. We are experts in fixing and
            repairing watches from world-renowned brands including Rolex,
            Breitling, Bell & Ross, and many other brands.
          </p>
          <Link to="#!" className="btn-dark">
            LEARN MORE
          </Link>
        </div>

        <img
          src={aboutCompany}
          className="w-full rounded-md lg:w-1/2"
          alt="company"
        />
      </div>
    </section>
  );
};

export default AboutUs;
