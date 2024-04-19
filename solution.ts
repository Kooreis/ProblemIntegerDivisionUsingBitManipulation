Here is a TypeScript console application that performs integer division using bit manipulation:

```typescript
class BitManipulation {
    divide(dividend: number, divisor: number): number {
        if (divisor === 0) {
            throw new Error("Divisor cannot be zero");
        }

        if (dividend === 0) {
            return 0;
        }

        if (dividend === divisor) {
            return 1;
        }

        if (divisor === 1) {
            return dividend;
        }

        let quotient = 0;
        while (dividend >= divisor) {
            let shift = 0;
            while (dividend >= (divisor << shift)) {
                shift++;
            }

            dividend -= divisor << (shift - 1);
            quotient += 1 << (shift - 1);
        }

        return quotient;
    }
}

let bitManipulation = new BitManipulation();
console.log(bitManipulation.divide(10, 2)); // Outputs: 5
console.log(bitManipulation.divide(18, 9)); // Outputs: 2
console.log(bitManipulation.divide(58, 10)); // Outputs: 5
console.log(bitManipulation.divide(100, 20)); // Outputs: 5
```

This application defines a class `BitManipulation` with a method `divide` that performs integer division using bit manipulation. The `divide` method takes two arguments: `dividend` and `divisor`. It checks for edge cases where the divisor is zero, the dividend is zero, the dividend equals the divisor, and the divisor is one. Then it performs the division using bit manipulation. The `while` loop continues until the dividend is less than the divisor. Inside the loop, it finds the highest bit of the dividend that can be divided by the divisor, subtracts the divisor shifted left by that bit from the dividend, and adds 1 shifted left by that bit to the quotient. The `console.log` statements at the end of the application call the `divide` method with different arguments and print the results.