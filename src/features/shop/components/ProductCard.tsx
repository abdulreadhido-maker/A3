import GlassCard from "../../../components/common/GlassCard";
import PrimaryButton from "../../../components/common/PrimaryButton";

import type {
  Product
} from "../types";

import useShop from "../hooks";



interface ProductCardProps {

  product: Product;

}



function ProductCard({

  product

}: ProductCardProps){


  const {

    addToCart

  } = useShop();



  return (

    <GlassCard>

      <div className="product-card">

        {

          product.image && (

            <img

              src={product.image}

              alt={product.name}

            />

          )

        }



        <h3>

          {product.name}

        </h3>



        <p>

          {product.description}

        </p>



        <strong>

          ${product.price}

        </strong>



        <p>

          Stock: {product.stock}

        </p>



        <PrimaryButton

          onClick={()=>addToCart(product)}

        >

          Add To Cart

        </PrimaryButton>



      </div>

    </GlassCard>

  );

}



export default ProductCard;
