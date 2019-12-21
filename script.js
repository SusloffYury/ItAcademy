//https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json
const SUPER_HEROES_CONT = document.querySelector('.super_heroes')
let super_heroes=()=>{
return fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
 .then(response=>response.json())
  .then(heroes_array=>{
    heroes_array.length = 10;
    return heroes_array;
  });
 }
const creatSuperHeroesHTML =({name, images: { lg: heroImage}})=>{
  let div = document.createElement('div');
    div.className = name;
    div.innerHTML = name;
     let image = document.createElement('img')
     image.src = heroImage;
     div.append(image);
     SUPER_HEROES_CONT.append(div); 
};
super_heroes().then(super_heroes=>{
  super_heroes.map(creatSuperHeroesHTML)
}) 

