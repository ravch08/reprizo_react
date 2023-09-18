import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/apiblogs";
import { BlogItem, Loading } from "../utils/helper";

import { BlogProps } from "../../types/types";

const Blog = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (error) {
    console.error(error);
    throw new Error("Blog Items could not be Loaded!");
  }

  return (
    <section>
      <div className="container">
        <div className="mx-auto w-3/5 text-center">
          <h2 className="font-serif text-5xl leading-normal">Journal & Blog</h2>
          <p className="mb-12 mt-4">
            Apart from repair services, we are keeping a blog where we post
            useful tips on how to choose and maintain wrist watches and jewelry,
            and many other topics to educate and entertain our readers.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between lg:flex-row">
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((blogItem: BlogProps) => (
              <BlogItem
                key={blogItem.id}
                img={blogItem.img}
                date={blogItem.date}
                title={blogItem.title}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
