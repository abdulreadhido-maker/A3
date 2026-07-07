export function formatNumber(
  value:number
){

  return new Intl.NumberFormat(
    "en-US"
  ).format(value);

}





export function clamp(

value:number,

min:number,

max:number

){

  return Math.min(
    Math.max(value,min),
    max
  );

}





export function percentage(

value:number,

total:number

){

  if(total === 0){

    return 0;

  }


  return Math.round(
    (value / total) * 100
  );

}
