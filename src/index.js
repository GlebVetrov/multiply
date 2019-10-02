function multiply(first, second) {
  // your solution
        const num1 = first;
        const num2 = second;

        let stack = [];

        for (let i = 0; i < num1.length; i++) {
            for (let j = 0; j < num2.length; j++) {
                let mul = num1[i] * num2[j];
                stack[i + j] = stack[i + j] ? +stack[i + j] + mul : mul;
            }
        }

        let strArray = [];

        stack.reverse().forEach((elem, i) => {
            let num = elem % 10;
            let remainder = Math.floor(elem / 10);
            if (strArray[i]) {
                elem = num + strArray[i];
                num = elem % 10;
                remainder = remainder + Math.floor(elem / 10);
            }
            strArray[i] = num;
            if (remainder !== 0) {
                strArray[i + 1] = remainder;
            }
        });
    return strArray.reverse().join('');
    
}

module.exports = multiply;
