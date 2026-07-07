import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";



interface User {

  id:string;

  name:string;

  email:string;

  role?:string;

}





interface AuthContextType {

  user:User | null;

  login:(userData:User)=>void;

  logout:()=>void;

  isAuthenticated:boolean;

}





const AuthContext =
createContext<AuthContextType | undefined>(
undefined
);






interface AuthProviderProps {

  children:ReactNode;

}







export function AuthProvider({

children

}:AuthProviderProps){



const [user,setUser] =
useState<User | null>(()=>{


if(typeof window === "undefined")

return null;



const savedUser =
localStorage.getItem("user");



return savedUser
?
JSON.parse(savedUser)
:
null;


});







useEffect(()=>{


if(user){


localStorage.setItem(

"user",

JSON.stringify(user)

);


}else{


localStorage.removeItem(
"user"
);


}


},[user]);








function login(userData:User){


setUser(userData);


}







function logout(){


setUser(null);


}







return (

<AuthContext.Provider


value={{

user,

login,

logout,

isAuthenticated:
Boolean(user)

}}


>


{children}


</AuthContext.Provider>

);


}








export function useAuth(){



const context =
useContext(AuthContext);



if(!context){


throw new Error(

"useAuth must be used inside AuthProvider"

);


}



return context;


}
