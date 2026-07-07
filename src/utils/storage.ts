function setStorage<T>(
  key:string,
  value:T
){

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );

}



function getStorage<T>(
  key:string
):T | null{


  const item =
    localStorage.getItem(key);



  if(!item){

    return null;

  }



  try{

    return JSON.parse(item) as T;

  }catch{

    return null;

  }


}





function removeStorage(
  key:string
){

  localStorage.removeItem(key);

}




export {
  setStorage,
  getStorage,
  removeStorage
};
