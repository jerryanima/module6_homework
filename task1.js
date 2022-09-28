function checkArray(array){
    let count1 = 0;
    let count2 = 0;
    let countZero = 0;
    array.forEach(element => {
        if (!isNaN(element) && typeof element == 'number'){
            if (element == 0) {
                countZero++;
            } else if (element % 2 == 0){
                count2++;
            } else {
                count1++;
            }
        }    
    });
    console.log(`колическво четных чисел = ${count2} . количество нечетных чисел = ${count1}. Нулевых элементов = ${countZero}`)
};

//checkArray([1,2,3,4,0,undefined,'shhshh','11',66])
checkArray([0])