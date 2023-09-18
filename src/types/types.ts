export type BlogProps = {
  id?: number;
  img: string;
  date: string;
  title: string;
};

export type ProductProps = {
  id?: number;
  img: string;
  title: string;
  price: number;
  rating: number;
  discount: number;
  priceCrossed: number | string;
};

export type TestimonialProps = {
  id?: number;
  name: string;
  img: string;
  quote: string;
};

export type ClientProps = {
  id?: number;
  img: string;
};
