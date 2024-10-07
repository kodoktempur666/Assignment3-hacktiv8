// FIRMAN MAULANA
function sumArray(arr, target) {
    const result = [];
    const seen = new Set(); 

    for (let num of arr) {
        const complement = target - num;
        
        if (seen.has(complement)) {
            result.push([complement, num]); 
        }
        
        seen.add(num);
    }
    
    return result; 
}


console.log(sumArray([2, 1, 4, 3], 5)); // output: [[4, 1], [2, 3]]
console.log(sumArray([1, 8, 10, 3], 11)); // output: [[1, 10], [8, 3]]
