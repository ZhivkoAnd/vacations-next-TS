export interface BookingProps {
  id: number;
  title: string;
  price: number;
  image?: string;
  qty?: number;
}

export interface Product {
  [data: string]: {
    cities?: [];
    id: number;
    title: string;
    price: number;
    image?: string;
    qty?: number;
  };
}
