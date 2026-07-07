import {
  useState,
  useEffect
} from "react";



function useLocalStorage<T>(

key:string,

initialValue:T

){



const [value,setValue] = useState<T>(()=>{


try {


const saved = localStorage.getItem(key);



return saved

?

JSON.parse(saved)

:

initialValue;



}catch{


return initialValue;


}


});







useEffect(()=>{


try {


localStorage.setItem(

key,

JSON.stringify(value)

);


}catch{


console.error(
"Unable to save data"
);


}



},[key,value]);







return [

value,

setValue

] as const;


}



export default useLocalStorage;
