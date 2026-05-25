interface Product {
  index: number;
  name: string;
  description: string;
  price: string;
  tax: string;
  total: string;
}

interface ProductDetailsFixture {
  products: Product[];
}
