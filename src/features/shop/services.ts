import apiRequest from "../../services/api";

import type {
  Product,
  Order,
  CreateProductRequest,
  UpdateProductRequest
} from "./types";



export function getProducts(){

  return apiRequest<Product[]>(

    "/products"

  );

}





export function getProductById(

  id:string

){

  return apiRequest<Product>(

    `/products/${id}`

  );

}





export function createProduct(

  data:CreateProductRequest

){

  return apiRequest<Product>(

    "/products",

    {

      method:"POST",

      body:data

    }

  );

}





export function updateProduct(

  id:string,

  data:UpdateProductRequest

){

  return apiRequest<Product>(

    `/products/${id}`,

    {

      method:"PUT",

      body:data

    }

  );

}





export function deleteProduct(

  id:string

){

  return apiRequest(

    `/products/${id}`,

    {

      method:"DELETE"

    }

  );

}





export function createOrder(

  order:Order

){

  return apiRequest<Order>(

    "/orders",

    {

      method:"POST",

      body:order

    }

  );

}





export function getOrders(){

  return apiRequest<Order[]>(

    "/orders"

  );

}
