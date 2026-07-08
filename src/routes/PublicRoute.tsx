import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

import useAuth from "../hooks/useAuth";



interface PublicRouteProps {

  children: ReactNode;

}



function PublicRoute({

  children

}: PublicRouteProps) {

  const { isAuthenticated } = useAuth();



  if (isAuthenticated) {

    return <Navigate to="/dashboard" replace />;

  }



  return <>{children}</>;

}



export default PublicRoute;
