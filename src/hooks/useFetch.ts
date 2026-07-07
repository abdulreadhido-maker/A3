import {
  useEffect,
  useState
} from "react";



interface FetchState<T> {

  data:T | null;

  loading:boolean;

  error:string | null;

}



function useFetch<T>(

url:string

){


const [state,setState] =
useState<FetchState<T>>({

data:null,

loading:true,

error:null

});





useEffect(()=>{


const controller =
new AbortController();




async function fetchData(){


try{


setState({

data:null,

loading:true,

error:null

});



const response =
await fetch(

url,

{

signal:controller.signal

}

);



if(!response.ok){

throw new Error(
"Failed to fetch data"
);

}



const result:T =
await response.json();





setState({

data:result,

loading:false,

error:null

});





}catch(error:any){


if(error.name !== "AbortError"){


setState({

data:null,

loading:false,

error:error.message

});


}


}


}





fetchData();




return ()=>{

controller.abort();

};



},[url]);





return state;


}



export default useFetch;
