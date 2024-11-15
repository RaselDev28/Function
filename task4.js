function count_zero(binary){
    let count=0;
    for(const binaris of binary){
        if(binaris=='0'){
            count++;
        }
    }
    return count;
}
const st ='1001010';
console.log(count_zero(st));
