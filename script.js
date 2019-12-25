//https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json
const SUPER_HEROES_CONT = document.querySelector('.super_heroes')
let super_heroes=()=>{
return fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
 .then(response=>response.json())
  .then(heroes_array=>{
    heroes_array.length = 10;
    return heroes_array;});
 }
const creatSuperHeroesHTML =({name, images: { lg: heroImage}})=>{
  let div = document.createElement('div');
     div.className = 'superhero';
     let image = document.createElement('img')
      image.src = heroImage;
      div.append(image);
      SUPER_HEROES_CONT.append(div); 
   
};
    const createArray =()=>{
    return document.querySelectorAll('.superhero')
    };

  const creatGallery =(galleryArray)=>{
    let arrayIndex = 0;
    setInterval(() => {
      if(!galleryArray[arrayIndex]){
        arrayIndex = 0;
        galleryArray[galleryArray.length - 1].classList.toggle('superheroVisible')
      }

      if(galleryArray[arrayIndex - 1]){
        galleryArray[arrayIndex - 1].classList.toggle('superheroVisible')
       
    }
      if(galleryArray[arrayIndex]){
             galleryArray[arrayIndex ].classList.toggle('superheroVisible')
             arrayIndex++;
      }
    }, 1000);
    

  } 

 
 super_heroes().then(super_heroes=>{
  super_heroes.map(creatSuperHeroesHTML)
 }).then(createArray)
 .then((galleryArray)=>creatGallery(galleryArray))
 



