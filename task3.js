function make_avg(numbers){
     const length=numbers.length;
    let sum=0;
    let avg=0;
    for(const number of numbers){
        sum=sum+number;
        avg=sum/length;
    }
    return avg;
}
const arr=[1,2,4,5,5];
console.log(make_avg(arr));
