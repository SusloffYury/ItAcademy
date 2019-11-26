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
 
  let print = setInterval(function(){
    console.log(time);
    if(time == to){
      clearInterval(print);
    }
    time++;
  },1000)
  
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
//console.log(sumSalaries(salaries));
//console.log(topSalary(salaries));
printNumbers(5, 10);

