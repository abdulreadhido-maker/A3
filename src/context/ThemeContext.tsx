import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";



interface ThemeContextType {

  dark:boolean;

  toggleTheme:()=>void;

}



const ThemeContext =
createContext<ThemeContextType | undefined>(undefined);





interface ThemeProviderProps {

  children:ReactNode;

}





export function ThemeProvider({

children

}:ThemeProviderProps){



const [dark,setDark] =
useState<boolean>(()=>{


if(typeof window === "undefined")

return true;



return localStorage.getItem("theme")
!== 
"light";


});





useEffect(()=>{


if(dark){


document.documentElement.classList.add(
"dark"
);


localStorage.setItem(
"theme",
"dark"
);



}else{


document.documentElement.classList.remove(
"dark"
);


localStorage.setItem(
"theme",
"light"
);



}


},[dark]);







function toggleTheme(){

setDark(prev=>!prev);

}





return (

<ThemeContext.Provider

value={{

dark,

toggleTheme

}}

>


{children}


</ThemeContext.Provider>

);


}





export function useTheme(){


const context =
useContext(ThemeContext);



if(!context){

throw new Error(
"useTheme must be used inside ThemeProvider"
);

}



return context;


}
