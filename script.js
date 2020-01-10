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
 
 let buttons = (galleryArray)=>{
  // galleryArray[arrayIndex].classList.toggle('superheroVisible')
   let arrayIndex = 0;
   let prevIndex = 0; 
             
    document.addEventListener('click',function(event){
     let target = event.target;
      if(target.id == 'next'){   
       if(arrayIndex > galleryArray.length-1){
        arrayIndex = 0;
        }
        console.log(arrayIndex)
        if(arrayIndex==0){
         galleryArray[arrayIndex].classList.toggle('superheroVisible')
         }
         if(galleryArray[arrayIndex-1]){
          galleryArray[arrayIndex-1].classList.toggle('superheroVisible')
          galleryArray[arrayIndex].classList.toggle('superheroVisible')
            }
           if(!galleryArray[arrayIndex + 1]){
           galleryArray[arrayIndex].classList.toggle('superheroVisible')
           }
          arrayIndex++;
            }
           if(target.id =='prev'){
            if(arrayIndex <= 0){
            arrayIndex = galleryArray.length - 1
              }
           console.log(arrayIndex)
            arrayIndex--;
          }
                  
        })
       }

super_heroes().then(super_heroes=>{
   super_heroes.map(creatSuperHeroesHTML)
   }).then((galleryArray)=>creatGalleryArr(galleryArray))
   .then((galleryArray)=>buttons(galleryArray))
  
   
      
             
        
           

     
          
    
 
 
  
 
  
 


 




 



