 import{ fetchApi } from './createHeroesArray.js'

export const heroGender =()=>{
 
   fetchApi()
   .then(heroesArray=>{
     return  heroesArray
     .filter(({appearance:{gender}})=>gender =='Male')
   })
   .then(console.log)  
   
}