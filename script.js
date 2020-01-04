//https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json
const SUPER_HEROES_CONT = document.querySelector('.super_heroes')

let super_heroes=()=>{
return fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
 .then(response=>response.json())
  .then(heroes_array=>{
    heroes_array.length = 10;
    return heroes_array;});
 }
const creatSuperHeroesHTML =({images: { lg: heroImage}})=>{
  let div = document.createElement('div');
     div.className = 'superhero';
     let image = document.createElement('img')
      image.src = heroImage;
      div.append(image);
      SUPER_HEROES_CONT.append(div); 
   
};
  let creatGalleryArr =()=>{
     
     return document.querySelectorAll('.superhero')
        
  }
         

      let button = (galleryArray)=>{
         let buttNext = document.getElementById('next')
         let buttPrev = document.getElementById('prev') 
            
         let arrayIndex = 0;
           // galleryArray[arrayIndex].classList.toggle('superheroVisible')
          let next =()=>{
                      
                     if(galleryArray[arrayIndex - 1]){
                        galleryArray[arrayIndex - 1].classList.toggle('superheroVisible')
                     }

                        if(galleryArray[arrayIndex]){
                           galleryArray[arrayIndex].classList.toggle('superheroVisible')
                           arrayIndex++;
                          
                        }

                        if(!galleryArray[arrayIndex + 1]){
                           arrayIndex = 0;
                         }
                           
                 
      };
      buttNext.addEventListener('click', next)
      buttPrev.addEventListener('click', prev)
     }
      
      

super_heroes().then(super_heroes=>{
   super_heroes.map(creatSuperHeroesHTML)
   }).then((galleryArray)=>creatGalleryArr(galleryArray))
   .then((galleryArray)=>button(galleryArray))
  
   
      
             
        
           

     
          
    
 
 
  
 
  
 


 




 



