function example(a){
    return function(b){
      return a + b;
    }
  }  
const sum = example(2);

const sumValue = sum(4)

console.log(sumValue); 