import apiRequest from "./api";



interface SearchResult {

  id:string;

  title:string;

  type:string;

  description?:string;

}







export function searchContent(

query:string

){

  return apiRequest<SearchResult[]>(

    `/search?q=${encodeURIComponent(query)}`

  );

}







export function searchProjects(

query:string

){

  return apiRequest<SearchResult[]>(

    `/search/projects?q=${encodeURIComponent(query)}`

  );

}







export function searchCourses(

query:string

){

  return apiRequest<SearchResult[]>(

    `/search/courses?q=${encodeURIComponent(query)}`

  );

}
