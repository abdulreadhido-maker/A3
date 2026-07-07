import {
  LayoutDashboard,
  FolderKanban,
  ShoppingBag,
  CreditCard,
  User,
  Settings,
  Bell,
  LogOut,
  X
} from "lucide-react";

import {
  Link,
  useLocation
} from "react-router-dom";

import { motion } from "framer-motion";



interface MenuItem {

  name:string;

  path:string;

  icon:any;

}



const menuItems:MenuItem[] = [

  {
    name:"Dashboard",
    path:"/dashboard",
    icon:LayoutDashboard
  },

  {
    name:"Projects",
    path:"/dashboard/projects",
    icon:FolderKanban
  },

  {
    name:"Orders",
    path:"/dashboard/orders",
    icon:ShoppingBag
  },

  {
    name:"Billing",
    path:"/dashboard/billing",
    icon:CreditCard
  },

  {
    name:"Profile",
    path:"/dashboard/profile",
    icon:User
  },

  {
    name:"Notifications",
    path:"/dashboard/notifications",
    icon:Bell
  },

  {
    name:"Settings",
    path:"/dashboard/settings",
    icon:Settings
  }

];




interface Props {

 open:boolean;

 setOpen:(value:boolean)=>void;

}





function DashboardSidebar({

open,

setOpen

}:Props){



const location = useLocation();





return (

<>


{


open && (

<div

className="sidebar-overlay"

onClick={()=>setOpen(false)}

 />

)


}



<motion.aside


initial={false}


animate={{

x: open ? 0 : -300

}}


className="dashboard-sidebar glass"


>



<div className="sidebar-header">


<h2 className="text-gradient">

Torrema

</h2>



<button

className="sidebar-close"

onClick={()=>setOpen(false)}

>


<X size={22}/>


</button>


</div>





<nav className="sidebar-menu">


{

menuItems.map((item)=>{


const Icon = item.icon;


const active =
location.pathname === item.path;



return (


<Link

key={item.path}

to={item.path}

onClick={()=>setOpen(false)}

className={

active

?

"sidebar-link active"

:

"sidebar-link"

}


>


<Icon size={21}/>


<span>

{item.name}

</span>


</Link>


);


})


}



</nav>







<button

className="sidebar-logout"

>


<LogOut size={21}/>


Logout


</button>





</motion.aside>


</>

);


}



export default DashboardSidebar;
