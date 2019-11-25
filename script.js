function sumSalaries(salaries){
  let sum = 0;
  
  // for (let salary of Object.values(salaries)) {
  //   sum += salary;
    return Object.values(salaries).reduce((a, b)=> a+b,0);
  }

 



  function topSalary(salaries){
    debugger;
    let maxSalary = Object.entries(salaries).filter((key, value)=> Math.max(value));
     return maxSalary;
    } 
     
     
  

function printNumbers(from, to){

}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
//console.log(sumSalaries(salaries));
console.log(topSalary(salaries));
