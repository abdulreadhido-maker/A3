import PrimaryButton from "../../../components/common/PrimaryButton";
import GlassCard from "../../../components/common/GlassCard";

import useShop from "../hooks";



function Cart(){

  const {

    cart,

    removeFromCart,

    checkout

  } = useShop();



  const total = cart.reduce(

    (sum,item)=>

      sum +

      item.product.price *

      item.quantity,

    0

  );



  return (

    <GlassCard>

      <h2>

        Shopping Cart

      </h2>



      {

        cart.length === 0

        ?

        (

          <p>

            Your cart is empty.

          </p>

        )

        :

        (

          <>

            <ul>

              {

                cart.map(item=>(

                  <li key={item.product.id}>

                    <strong>

                      {item.product.name}

                    </strong>

                    {" × "}

                    {item.quantity}

                    {" - $"}

                    {

                      item.product.price *

                      item.quantity

                    }



                    <PrimaryButton

                      onClick={()=>

                        removeFromCart(

                          item.product.id

                        )

                      }

                    >

                      Remove

                    </PrimaryButton>

                  </li>

                ))

              }

            </ul>



            <h3>

              Total: ${total}

            </h3>



            <PrimaryButton

              onClick={checkout}

            >

              Checkout

            </PrimaryButton>

          </>

        )

      }

    </GlassCard>

  );

}



export default Cart;
