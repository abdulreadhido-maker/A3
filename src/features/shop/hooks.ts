import {
  useEffect,
  useState
} from "react";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createOrder,
  getOrders
} from "./services";

import type {
  Product,
  Order,
  CreateProductRequest,
  UpdateProductRequest,
  CartItem
} from "./types";



function useShop(){

  const [products,setProducts] =
  useState<Product[]>([]);



  const [orders,setOrders] =
  useState<Order[]>([]);



  const [cart,setCart] =
  useState<CartItem[]>([]);



  const [loading,setLoading] =
  useState(true);



  const [error,setError] =
  useState<string | null>(null);





  async function loadShop(){

    try{

      setLoading(true);

      setError(null);



      const [

        productsData,

        ordersData

      ] = await Promise.all([

        getProducts(),

        getOrders()

      ]);



      setProducts(productsData);

      setOrders(ordersData);



    }catch(err:any){

      setError(err.message);


    }finally{

      setLoading(false);

    }

  }





  async function addProduct(

    data:CreateProductRequest

  ){

    const product =

      await createProduct(data);



    setProducts(prev=>[

      ...prev,

      product

    ]);



    return product;

  }





  async function editProduct(

    id:string,

    data:UpdateProductRequest

  ){

    const updated =

      await updateProduct(

        id,

        data

      );



    setProducts(prev=>

      prev.map(product=>

        product.id === id

        ?

        updated

        :

        product

      )

    );



    return updated;

  }





  async function removeProduct(

    id:string

  ){

    await deleteProduct(id);



    setProducts(prev=>

      prev.filter(product=>

        product.id !== id

      )

    );

  }





  function addToCart(

    product:Product

  ){

    setCart(prev=>{

      const existing = prev.find(

        item =>

        item.product.id === product.id

      );



      if(existing){

        return prev.map(item=>

          item.product.id === product.id

          ?

          {

            ...item,

            quantity:item.quantity + 1

          }

          :

          item

        );

      }



      return [

        ...prev,

        {

          product,

          quantity:1

        }

      ];

    });

  }





  function removeFromCart(

    id:string

  ){

    setCart(prev=>

      prev.filter(item=>

        item.product.id !== id

      )

    );

  }





  async function checkout(){

    const total = cart.reduce(

      (sum,item)=>

      sum +

      item.product.price *

      item.quantity,

      0

    );



    const order = await createOrder({

      id:crypto.randomUUID(),

      items:cart,

      total,

      status:"pending",

      createdAt:new Date()

      .toISOString()

    });



    setOrders(prev=>[

      ...prev,

      order

    ]);



    setCart([]);

  }





  useEffect(()=>{

    loadShop();

  },[]);





  return {

    products,

    orders,

    cart,

    loading,

    error,

    refresh:loadShop,

    addProduct,

    editProduct,

    removeProduct,

    addToCart,

    removeFromCart,

    checkout

  };

}



export default useShop;
