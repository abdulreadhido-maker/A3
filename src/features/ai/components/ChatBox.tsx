import GlassCard from "../../../components/common/GlassCard";

import ChatMessage from "./ChatMessage";

import useAI from "../hooks";



function ChatBox(){

  const {

    currentConversation,

    loading

  } = useAI();



  if(loading){

    return <p>Loading conversation...</p>;

  }



  if(!currentConversation){

    return (

      <GlassCard>

        <p>

          Select a conversation to start chatting.

        </p>

      </GlassCard>

    );

  }



  return (

    <GlassCard>

      <div className="chat-box">

        {

          currentConversation.messages.map(message=>(

            <ChatMessage

              key={message.id}

              message={message}

            />

          ))

        }

      </div>

    </GlassCard>

  );

}



export default ChatBox;
