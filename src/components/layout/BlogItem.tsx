import { Link } from "react-router-dom";
import { BlogProps } from "../../types/types";

const BlogItem = ({ date, title, img }: BlogProps) => {
  return (
    <Link to="#!" className="relative overflow-hidden rounded-lg">
      <img
        src={img}
        alt={title}
        className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
      />
      <div className="absolute bottom-8 left-8 text-white">
        <span>{date}</span>
        <h3 className="pb-4 pt-2 font-serif text-2xl transition-colors duration-500 ease-in-out hover:text-primary">
          {title}
        </h3>

        <div className="flex flex-row items-center gap-2 transition-colors duration-500 ease-in-out hover:text-primary">
          ---- READ MORE
          <svg
            width="8"
            fill="white"
            className="ml-1"
            viewBox="0 0 320 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
