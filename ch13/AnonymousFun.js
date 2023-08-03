function calculateSum(a, b) {
    return () => {
     return a + b();
    }
}

let sum = calculateSum(10, () =>20);