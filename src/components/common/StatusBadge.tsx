interface StatusBadgeProps {

  status:string;

}



function StatusBadge({

status

}:StatusBadgeProps){



const getStatusClass = () => {


switch(status.toLowerCase()){


case "active":

return "status-badge success";



case "completed":

return "status-badge success";



case "pending":

return "status-badge warning";



case "cancelled":

return "status-badge danger";



default:

return "status-badge";


}


};





return (

<span

className={getStatusClass()}

>

{status}

</span>

);


}



export default StatusBadge;
