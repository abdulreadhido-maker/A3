import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";



type Language = "en" | "ar";



interface LanguageContextType {

  language: Language;

  direction: "ltr" | "rtl";

  changeLanguage: (
    lang: Language
  ) => void;

}





const LanguageContext =
createContext<LanguageContextType | undefined>(
  undefined
);






interface LanguageProviderProps {

  children: ReactNode;

}






export function LanguageProvider({

children

}:LanguageProviderProps){



const [language,setLanguage] =
useState<Language>(()=>{


if(typeof window === "undefined")

return "en";



return (

localStorage.getItem("language")
as Language

)

||
"en";


});







const direction =
language === "ar"
?
"rtl"
:
"ltr";







useEffect(()=>{


document.documentElement.lang =
language;


document.documentElement.dir =
direction;



localStorage.setItem(
"language",
language
);



},[language,direction]);








function changeLanguage(

lang:Language

){


setLanguage(lang);


}







return (

<LanguageContext.Provider


value={{

language,

direction,

changeLanguage

}}


>


{children}


</LanguageContext.Provider>

);


}







export function useLanguage(){


const context =
useContext(LanguageContext);



if(!context){


throw new Error(

"useLanguage must be used inside LanguageProvider"

);


}



return context;


}
