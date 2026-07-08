import { useState } from "react";

import PrimaryButton from "../../../components/common/PrimaryButton";

import useAI from "../hooks";



function ChatInput(){

  const {

    chat,

    loading

  } = useAI();



  const [message,setMessage] =
  useState("");



  async function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();



    if(

      !message.trim()

    ){

      return;

    }



    await chat(message);



    setMessage("");

  }



  return (

    <form

      className="chat-input"

      onSubmit={handleSubmit}

    >

      <input

        type="text"

        placeholder="Type your message..."

        value={message}

        onChange={(e)=>

          setMessage(

            e.target.value

          )

        }

      />



      <PrimaryButton

        type="submit"

        disabled={loading}

      >

        Send

      </PrimaryButton>

    </form>

  );

}



export default ChatInput;
