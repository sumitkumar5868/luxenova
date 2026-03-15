export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  benefits: string;
  tags: string[];
  image: string;
  scentProfile: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}
