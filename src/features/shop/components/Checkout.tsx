import { useState } from "react";

import GlassCard from "../../../components/common/GlassCard";
import InputField from "../../../components/common/InputField";
import PrimaryButton from "../../../components/common/PrimaryButton";

import useShop from "../hooks";



function Checkout(){

  const {

    cart,

    checkout,

    loading

  } = useShop();



  const [fullName,setFullName] =
  useState("");

  const [email,setEmail] =
  useState("");

  const [address,setAddress] =
  useState("");



  const total = cart.reduce(

    (sum,item)=>

      sum +

      item.product.price *

      item.quantity,

    0

  );



  async function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();

    await checkout();

  }



  return (

    <GlassCard>

      <h2>

        Checkout

      </h2>



      <form onSubmit={handleSubmit}>

        <InputField

          label="Full Name"

          value={fullName}

          onChange={(e)=>

            setFullName(e.target.value)

          }

        />



        <InputField

          label="Email"

          type="email"

          value={email}

          onChange={(e)=>

            setEmail(e.target.value)

          }

        />



        <InputField

          label="Shipping Address"

          value={address}

          onChange={(e)=>

            setAddress(e.target.value)

          }

        />



        <h3>

          Order Total: ${total}

        </h3>



        <PrimaryButton

          type="submit"

          disabled={loading || cart.length === 0}

        >

          {

            loading

            ?

            "Processing..."

            :

            "Place Order"

          }

        </PrimaryButton>

      </form>

    </GlassCard>

  );

}



export default Checkout;
