import {
  useEffect,
  useState
} from "react";



function useMediaQuery(

query:string

){


const [matches,setMatches] =
useState<boolean>(false);





useEffect(()=>{


const media =
window.matchMedia(query);




const updateMatch = () => {

  setMatches(media.matches);

};





updateMatch();





media.addEventListener(

"change",

updateMatch

);





return ()=>{


media.removeEventListener(

"change",

updateMatch

);


};



},[query]);







return matches;


}



export default useMediaQuery;
