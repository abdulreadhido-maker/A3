import apiRequest from "./api";



interface PaymentData {

  amount:number;

  method:string;

  projectId?:string;

}





interface PaymentResponse {

  id:string;

  status:string;

  transactionId?:string;

}





export function createPayment(

data:PaymentData

){

  return apiRequest<PaymentResponse>(

    "/payments",

    {

      method:"POST",

      body:data

    }

  );

}







export function getPaymentHistory(){

  return apiRequest<PaymentResponse[]>(

    "/payments/history"

  );

}







export function getPaymentById(

id:string

){

  return apiRequest<PaymentResponse>(

    `/payments/${id}`

  );

}
