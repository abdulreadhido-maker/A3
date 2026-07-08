export interface Product {

  id:string;

  name:string;

  description:string;

  image?:string;

  category?:string;

  price:number;

  stock:number;

  rating?:number;

  createdAt:string;

  updatedAt:string;

}



export interface CartItem {

  product:Product;

  quantity:number;

}



export interface Order {

  id:string;

  items:CartItem[];

  total:number;

  status:
    | "pending"
    | "paid"
    | "completed"
    | "cancelled";

  createdAt:string;

}





export interface CreateProductRequest {

  name:string;

  description:string;

  price:number;

  stock:number;

  category?:string;

}



export interface UpdateProductRequest {

  name?:string;

  description?:string;

  price?:number;

  stock?:number;

  category?:string;

}
