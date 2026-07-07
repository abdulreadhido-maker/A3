const API_URL = 
import.meta.env.VITE_API_URL || "http://localhost:5000";



interface RequestOptions {

  method?: string;

  body?: unknown;

  headers?: Record<string,string>;

}





async function apiRequest<T>(

endpoint:string,

options:RequestOptions = {}

):Promise<T>{



const response = await fetch(

`${API_URL}${endpoint}`,

{

method: options.method || "GET",


headers:{

"Content-Type":"application/json",

...options.headers

},


body:

options.body

?

JSON.stringify(options.body)

:

undefined


}

);





if(!response.ok){


throw new Error(
"API request failed"
);


}





return response.json();

}





export default apiRequest;
