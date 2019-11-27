function sumSalaries(salaries){
  let sum = 0;
  
  // for (let salary of Object.values(salaries)) {
  //   sum += salary;
    return Object.values(salaries).reduce((a, b)=> a+b, 0);
  }

  function topSalary(salaries){
    let maxSal = 0;
    let maxName = null;
    for(let[key, value] of Object.entries(salaries)){
      if(value > maxSal){
        maxSal = value;
        maxName = key;
      }
    }
    
     return maxName;
    } 
     
     
  

function printNumbers(from, to){ 
        let time = from;
   let countNumber = setInterval(function(){
      console.log(time);
      if(time == to){
        clearInterval(countNumber);
      }
    time++;
  }, 1000);
}

function printNumbersRec(from, to) {
  let time = from;

  setTimeout(function timer() {
    console.log(time);
    if (time < to) {
      setTimeout(timer, 1000);
    }
    time++;
  }, 1000);
}

function timers(){
  let i = 0;
  setTimeout(()=>console.log(i), 10000);
  for(let j = 0; j < 1000000000; j++){
    i++;
  }
}

 function aclean(arr){
   let map = new Map();
    for(let string of arr){
     let key =  string.split("").sort().join("");
     map.set(key, string);
    }
  return Array.from(map.values());
   
 }
 let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
 console.log(aclean(arr));
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
//console.log(sumSalaries(salaries));
//console.log(topSalary(salaries));
//printNumbers(5, 10);
//printNumbersRec(1, 6);
timers();

