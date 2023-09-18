import { TestimonialProps } from "../../types/types";

const TestimonialItem = ({ name, img, quote }: TestimonialProps) => {
  return (
    <div className="rounded-lg bg-zinc-50 px-32 py-28 text-center">
      <p className="mb-12 text-xl leading-8 text-gray-400">
        &quot;{quote}&quot;
      </p>
      <img src={img} alt={name} className="mx-auto mb-4" />
      <small className="text-md font-sans uppercase tracking-wide">
        {name}
      </small>
    </div>
  );
};

export default TestimonialItem;
