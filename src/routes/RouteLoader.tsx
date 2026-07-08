import { Suspense, ReactNode } from "react";

import AppLoader from "../components/common/AppLoader";



interface RouteLoaderProps {

  children: ReactNode;

}



function RouteLoader({

  children

}: RouteLoaderProps) {

  return (

    <Suspense fallback={<AppLoader />}>

      {children}

    </Suspense>

  );

}



export default RouteLoader;
