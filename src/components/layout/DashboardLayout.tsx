import {
  ReactNode,
  useState
} from "react";

import {
  Menu
} from "lucide-react";

import DashboardSidebar from "./DashboardSidebar";



interface DashboardLayoutProps {

  children: ReactNode;

}



function DashboardLayout({

children

}: DashboardLayoutProps){



const [sidebarOpen,setSidebarOpen] =
useState(false);





return (

<div className="dashboard-layout">





{/* Mobile Menu Button */}

<button

className="dashboard-mobile-button"

onClick={()=>setSidebarOpen(true)}

aria-label="Open dashboard menu"

>

<Menu size={25}/>

</button>







<DashboardSidebar

open={sidebarOpen}

setOpen={setSidebarOpen}

/>







<main className="dashboard-content">


{children}


</main>





</div>

);


}



export default DashboardLayout;
