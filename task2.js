function isSimple (n) {
    if (n > 1000){
        return "данные введены некорректно"
        } else {
        if (n === 1 || n === 0) {
            return `${n} - не простое число`;
        } else {
            for(let i = 2; i < n; i++) {
                if(n % i === 0) {
                    return `${n} - не простое число`;
                }
            }
            return `${n} - простое число`;  
        }
    }
}

console.log(isSimple(4));