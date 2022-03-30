// https://leetcode.com/problems/pascals-triangle/

// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
 var generate = function(numRows) {
    let result = [[1]]
    for (let i=0; i<numRows; i++){
        let currentRow = []
        let previousRow = result[i-1]
       if (previousRow){
        for (let j=0; j<previousRow.length+1; j++){
            if (previousRow[j-1] && previousRow[j]){
            currentRow.push(previousRow[j-1]+previousRow[j])
            } else {
                currentRow.push(1)
            }
           
        }
           result.push(currentRow)
       }
    }
    return result
    
};

// Time complexity: Object(N^2)