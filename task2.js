function oddNum(numbers){
    if(numbers%2===1){
        const multi=numbers*2;
        return multi;
    }
    else{
        const div=numbers/2;
        return div;
    }
}

const number=oddNum(23);
const num=oddNum(22);
console.log(number,num);