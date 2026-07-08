import type {
  AIMessage
} from "../types";



interface ChatMessageProps {

  message: AIMessage;

}



function ChatMessage({

  message

}: ChatMessageProps){

  const isUser =

    message.role === "user";



  return (

    <div

      className={

        isUser

        ?

        "chat-message user"

        :

        "chat-message assistant"

      }

    >

      <div className="chat-message-header">

        <strong>

          {

            isUser

            ?

            "You"

            :

            "AI"

          }

        </strong>

      </div>



      <p>

        {message.content}

      </p>



      <small>

        {

          new Date(

            message.createdAt

          ).toLocaleTimeString()

        }

      </small>

    </div>

  );

}



export default ChatMessage;
