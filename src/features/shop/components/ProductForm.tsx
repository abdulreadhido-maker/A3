import { useState } from "react";

import InputField from "../../../components/common/InputField";
import PrimaryButton from "../../../components/common/PrimaryButton";

import useShop from "../hooks";



function ProductForm(){

  const {

    addProduct,

    loading

  } = useShop();



  const [name,setName] =
  useState("");

  const [description,setDescription] =
  useState("");

  const [category,setCategory] =
  useState("");

  const [price,setPrice] =
  useState(0);

  const [stock,setStock] =
  useState(0);





  async function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();



    await addProduct({

      name,

      description,

      category,

      price,

      stock

    });



    setName("");

    setDescription("");

    setCategory("");

    setPrice(0);

    setStock(0);

  }





  return (

    <form onSubmit={handleSubmit}>

      <InputField

        label="Product Name"

        value={name}

        onChange={(e)=>

          setName(e.target.value)

        }

      />



      <InputField

        label="Category"

        value={category}

        onChange={(e)=>

          setCategory(e.target.value)

        }

      />



      <label>

        Description

      </label>



      <textarea

        rows={5}

        value={description}

        onChange={(e)=>

          setDescription(e.target.value)

        }

      />



      <InputField

        label="Price"

        type="number"

        value={price}

        onChange={(e)=>

          setPrice(

            Number(e.target.value)

          )

        }

      />



      <InputField

        label="Stock"

        type="number"

        value={stock}

        onChange={(e)=>

          setStock(

            Number(e.target.value)

          )

        }

      />



      <PrimaryButton

        type="submit"

        disabled={loading}

      >

        {

          loading

          ?

          "Creating..."

          :

          "Create Product"

        }

      </PrimaryButton>

    </form>

  );

}



export default ProductForm;
