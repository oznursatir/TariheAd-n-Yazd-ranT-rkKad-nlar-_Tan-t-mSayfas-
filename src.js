function customReduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

// Örnek kullanım
const numbers = [1, 2, 3, 4, 5];
const sum = customReduce(numbers, (a, b) => a + b, 0);
console.log(sum); // 15

const product = customReduce(numbers, (a, b) => a * b, 1);
console.log(product); // 120
