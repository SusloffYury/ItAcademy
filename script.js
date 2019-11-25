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


function descSort(arr) {
return arr.sort(function compareNumeric(a,b){return a-b});
}

//console.log(descSort([100, 5, -2, - 10000, 0, 53]));

function independentSort(array){
  console.log(array);
 return array.slice().sort();
   
}

console.log(independentSort(["HTML", "JavaScript", "CSS"]));

function getMaxSubSum(arr){
  
   let a = 0; 
    for(let i = 0;i < arr.length; i++ ){
      if(arr[i] > 0 && arr[i+1] > 0 ){
       a +=arr[i] + arr[i + 1]
      }
    }
    return a;
}



// console.log(getMaxSubSum([-1, 2, 3, -9])) // = 5 
// console.log(getMaxSubSum([2, -1, 2, 3, -9])) // = 11
// console.log(getMaxSubSum([-2, -1, 1, 2])) // = 3
// console.log(getMaxSubSum([100, -9, 2, -3, 5])) // = 100

function Calculator(){
  this.methods = {
    "+": (a, b)=> a + b,
    "-": (a, b)=> a - b
  };
 
  this.calculate = function(str){
      let number  = str.split(' ');
        let num_1 = +number[0]
        let oper = number[1]
        let num_2 = +number[2]

          if(!this.methods[oper] || isNaN(num_1) || isNaN(num_2) ){
            return NaN;
          }
          return this.methods[oper](num_1 , num_2);
        }
        this.addNewMethod = function(name, func){
         return this.methods[name] = func
          
        };
       
      }


  let calc = new Calculator();
  let sum = calc.calculate('10 + 3');
    calc.addNewMethod("*", (a, b)=>a * b);
    let mult = calc.calculate('20 * 3');

      console.log(sum);
      console.log(mult);
