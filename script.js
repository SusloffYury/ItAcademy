// function isThereACat(animal){

// console.log(animal.toLowerCase().includes('cat')); 

//     }

// // isThereACat('bull, dog, Snake, CaT');
// // isThereACat('bull, dog, Snake');

// function isPythagoreanTheorem(a,b,c){
//     if(Math.pow(parseInt(a),2)+Math.pow(parseInt(b),2)==Math.ceil(Math.pow(parseFloat(c),2))){
//         console.log('true');
//     }else{console.log('false')}
  
// }
// // isPythagoreanTheorem(6, 8, 10);
// // isPythagoreanTheorem(2, 8 , 16);

// function gentleSum(a,b){
  
//   if(isNaN(parseInt(a)+parseInt(b))){
//     console.log( 'please enter valid data');
//   }else{
//     console.log(parseInt(a)+parseInt(b))
//   }

//   }
  


// gentleSum('234asfasf', '53asfa');
// gentleSum('sd234asfasf', '53asfa');
// gentleSum('234asfasf', 'nmn53asfa');


function deleteObjectValueByKey(obj, key){

if (key in obj){
  delete(obj.key);
  
 
}else {console.log('null')
}

}  

deleteObjectValueByKey({name:'Tanya', age:15},"age");

function printAllEvenNumbers(){
  let i= prompt('Введите любое число больше 0');
     while(typeof parseInt(i)!='number'){
    alert('не число');
    let i= prompt('Введите любое число больше 0');
    }
  
if(typeof parseInt(i)=='number'){ 
  for(let b = 0;b <= i; b++) {
    if (b%2==0){
      alert(b); 
  

}

}
}
}

printAllEvenNumbers();

