export function capitalize(
  text:string
){

  if(!text) return "";

  return (
    text.charAt(0).toUpperCase()
    +
    text.slice(1)
  );

}





export function truncate(
  text:string,
  length:number = 50
){

  if(text.length <= length){

    return text;

  }


  return (
    text.slice(0,length)
    +
    "..."
  );

}





export function sleep(
  ms:number
){

  return new Promise(
    resolve => setTimeout(resolve,ms)
  );

}





export function generateId(){

  return (
    Date.now().toString(36)
    +
    Math.random()
      .toString(36)
      .substring(2)
  );

}
