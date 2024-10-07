// FIRMAN MAULANA
function threeStepsAB (text) {
    const positionA = [];
    const posisitionB = [];
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            positionA.push(i);
        } else if (text[i] === 'b') {
            posisitionB.push(i);
        }
    }
    
    for (let a of positionA) {
        for (let b of posisitionB) {
            if (Math.abs(a - b) === 4) {
                return true; 
            }
        }
    }
    
    return false; 
    
    
}

console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false