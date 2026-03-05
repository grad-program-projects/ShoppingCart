
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartItem={
  id:number,
  title: string,
  price:number,
image:string,
quantity: number 
}

export type CartState = {
  items: CartItem[]
}

export type Action =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM";  payload: Product }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "DECREASE_ITEM"; payload: Product }