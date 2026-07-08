import ProductCard from "./ProductCard";

import useShop from "../hooks";



function ProductList(){

  const {

    products,

    loading,

    error

  } = useShop();



  if(loading){

    return (

      <p>

        Loading products...

      </p>

    );

  }



  if(error){

    return (

      <p>

        {error}

      </p>

    );

  }



  return (

    <div className="products-grid">

      {

        products.map((product)=>(

          <ProductCard

            key={product.id}

            product={product}

          />

        ))

      }

    </div>

  );

}



export default ProductList;
