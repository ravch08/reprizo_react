import {
  AboutUs,
  Banner,
  Bestsellers,
  Blog,
  Clients,
  CompanyBanner,
  Testimonials,
} from "../utils/helper";

const Home = () => {
  return (
    <main>
      <Banner />
      <Bestsellers />
      <CompanyBanner />
      <AboutUs />
      <Testimonials />
      <Blog />
      <Clients />
    </main>
  );
};

export default Home;
