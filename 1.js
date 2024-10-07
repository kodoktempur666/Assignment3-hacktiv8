// FIRMAN MAULANA
function isArithmeticProgression (numbers) {
    if (numbers.length < 2) return true; 
    const difference = numbers[1] - numbers[0]; 
    
    for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[i + 1] - numbers[i] !== difference) {
            return false; 
        }
    }
    return true; 

}


console.log(isArithmeticProgression([1, 2, 3, 4, 5,])); // true 
console.log(isArithmeticProgression([2, 4, 6, 12,24])); // false 
console.log(isArithmeticProgression([2, 4, 6, 8])); // true   
console.log(isArithmeticProgression([2, 6, 18, 54]));// false    
console.log(isArithmeticProgression([1, 2, 3, 4, 7,])); // false