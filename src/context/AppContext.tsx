import {
  ReactNode
} from "react";

import {
  ThemeProvider
} from "./ThemeContext";

import {
  LanguageProvider
} from "./LanguageContext";

import {
  AuthProvider
} from "./AuthContext";





interface AppContextProps {

  children:ReactNode;

}






function AppContext({

children

}:AppContextProps){



return (

<ThemeProvider>


<LanguageProvider>


<AuthProvider>


{children}


</AuthProvider>


</LanguageProvider>


</ThemeProvider>

);


}



export default AppContext;
