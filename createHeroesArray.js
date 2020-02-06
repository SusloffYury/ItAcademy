 
 export const fetchApi = ()=>{
    return fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
    .then(response => response.json())
    .then((heroesArray) =>{
         heroesArray.length = 100 
       return heroesArray;
       })
   
 }