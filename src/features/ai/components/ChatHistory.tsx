import GlassCard from "../../../components/common/GlassCard";

import useAI from "../hooks";



function ChatHistory(){

  const {

    conversations,

    currentConversation,

    openConversation,

    removeConversation

  } = useAI();



  return (

    <GlassCard>

      <h2>

        Conversations

      </h2>



      <ul className="chat-history">

        {

          conversations.map(

            conversation=>(

              <li

                key={conversation.id}

                className={

                  currentConversation?.id ===

                  conversation.id

                  ?

                  "active"

                  :

                  ""

                }

              >

                <button

                  type="button"

                  onClick={()=>

                    openConversation(

                      conversation.id

                    )

                  }

                >

                  {conversation.title}

                </button>



                <button

                  type="button"

                  onClick={()=>

                    removeConversation(

                      conversation.id

                    )

                  }

                >

                  Delete

                </button>

              </li>

            )

          )

        }

      </ul>

    </GlassCard>

  );

}



export default ChatHistory;
