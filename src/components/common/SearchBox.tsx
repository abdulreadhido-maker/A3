import {
  Search
} from "lucide-react";

import {
  ChangeEvent
} from "react";



interface SearchBoxProps {

  value:string;

  onChange:(value:string)=>void;

  placeholder?:string;

}



function SearchBox({

value,

onChange,

placeholder="Search..."

}:SearchBoxProps){



function handleChange(

e:ChangeEvent<HTMLInputElement>

){

  onChange(e.target.value);

}





return (

<div className="search-box">


<Search

size={20}

/>



<input

value={value}

onChange={handleChange}

placeholder={placeholder}

/>



</div>

);


}



export default SearchBox;
