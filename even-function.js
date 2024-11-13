function evenNumber(numbers){
    const arr=[];
    for(const number of numbers){
        if(number%2===0){
            arr.push(number);
            // console.log(arr);
        }
    }
    return arr;
}
// const nums=[5,4,6,9,12];
// console.log("The even number is ", evenNumber(nums));


function oddNumber(numbers){
    let sum=0;
    for(const number of numbers){
        if(number%2==1){
            sum=sum+number;
        }
    }
    return sum;
}

const num=[3,5,7,9,10,12,4];
console.log("Odd Number sum is ",oddNumber(num));