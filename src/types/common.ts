export interface SelectOption {

  label:string;

  value:string;

}



export interface MenuItem {

  label:string;

  path:string;

  icon?:string;

}



export interface Pagination {

  page:number;

  limit:number;

  total:number;

}



export interface ApiError {

  message:string;

  status?:number;

}



export interface LoadingState {

  loading:boolean;

  error:string | null;

}
