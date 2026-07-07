import {
  ReactNode
} from "react";



interface PrimaryButtonProps {

  children: ReactNode;

  type?: "button" | "submit";

  onClick?: () => void;

  disabled?: boolean;

}



function PrimaryButton({

children,

type="button",

onClick,

disabled=false

}:PrimaryButtonProps){



return (

<button

type={type}

onClick={onClick}

disabled={disabled}

className="primary-button"

>


{children}


</button>

);


}



export default PrimaryButton;
