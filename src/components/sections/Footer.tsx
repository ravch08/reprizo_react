import { ScrollTop } from "../utils/helper";

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container  py-24">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
          <div className="w-5/12">
            <p className="mb-8 text-2xl text-white">
              Sign up for our newsletter to receive special offers, news and
              great sales notifications.
            </p>

            <form className="flex flex-row items-center justify-between">
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-none bg-slate-800 p-4 text-gray-200"
              />

              <input
                type="submit"
                value="SUBSCRIBE"
                className=" cursor-pointer border-2 border-white bg-white px-12 py-4 text-black transition-colors duration-500 ease-in-out hover:border-primary hover:bg-primary hover:text-white"
              />
            </form>
          </div>
          <div className="line"></div>

          <div className="text-sm text-white">
            <span>LINKS</span>
            <ul className="mt-6 flex flex-col gap-3 font-thin">
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  PRODUCTS
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm text-white">
            <span>INFO</span>
            <ul className="mt-6 flex flex-col gap-3 font-thin">
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  TEAM
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  OUR MISSION
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  OUR HISTORY
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  CONTACTS
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm text-white">
            <span>SOCIALS</span>
            <ul className="mt-6 flex flex-col gap-3 font-thin">
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  PINTEREST
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  FACEBOOK
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="transition-colors duration-500 ease-in-out hover:text-primary"
                >
                  TWITTER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className=" opacity-20" />

      <div className="container py-8 text-center text-white">
        <p>Reprizo © 2023. All Rights Reserved.</p>
      </div>

      <ScrollTop />
    </footer>
  );
};

export default Footer;
