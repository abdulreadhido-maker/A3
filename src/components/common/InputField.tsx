import {
  InputHTMLAttributes
} from "react";



interface InputFieldProps
extends InputHTMLAttributes<HTMLInputElement>{

  label:string;

  error?:string;

}



function InputField({

label,

error,

...props

}:InputFieldProps){



return (

<div className="input-field">


<label>

{label}

</label>



<input

{...props}

/>





{

error && (

<span className="input-error">

{error}

</span>

)

}



</div>

);


}



export default InputField;
