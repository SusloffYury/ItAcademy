function isThereACat(animal){

console.log(animal.toLowerCase().includes('cat')); 

    }

isThereACat('bull, dog, Snake, CaT');

function isPythagoreanTheorem(a,b,c){
    if(Math.pow(parseInt(a),2)+Math.pow(parseInt(b),2)==Math.ceil(Math.pow(parseFloat(c),2))){
        console.log('true');
    }else{console.log('false')}
  
}
//isPythagoreanTheorem(6, 8, 10);
isPythagoreanTheorem(2, 8 , 16)

function gentleSum(a,b){
    if(typeof a=='number'||typeof b=='number'){
        return a+b
    }

}
