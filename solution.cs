Here is a JavaScript console application that performs integer division using bit manipulation:

```javascript
function divide(dividend, divisor) {
    if (divisor === 0) {
        return 'Error: Division by zero is not allowed';
    }
    if (dividend === 0) {
        return 0;
    }
    if (divisor === 1) {
        return dividend;
    }

    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let quotient = 0;
    while (dividend >= divisor) {
        let shift = 0;
        while (dividend >= (divisor << shift)) {
            shift++;
        }
        dividend -= divisor << (shift - 1);
        quotient += 1 << (shift - 1);
    }

    return sign * quotient;
}

console.log(divide(10, 2));  // Output: 5
console.log(divide(7, 3));   // Output: 2
console.log(divide(20, 5));  // Output: 4
console.log(divide(15, 0));  // Output: 'Error: Division by zero is not allowed'
console.log(divide(0, 15));  // Output: 0
```

This console application defines a function `divide` that performs integer division using bit manipulation. It then calls this function with various test cases and logs the results to the console.