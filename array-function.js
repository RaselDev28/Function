function sumOfArray(numbers){
let sum=0;
for(const number of numbers){
    sum=sum+number;
}
return sum;
}
const numbs=[1,5,3,6];
console.log(sumOfArray(numbs));



