import { ReactNode } from "react";

import Header from "./Header";

import SiteFooter from "./SiteFooter";



interface MainLayoutProps {

  children: ReactNode;

}



function MainLayout({

children

}: MainLayoutProps){



return (

<div className="app-layout">


<Header />



<main className="main-content">


{children}


</main>



<SiteFooter />


</div>

);


}



export default MainLayout;
