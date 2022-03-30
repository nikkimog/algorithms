// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    let maxNum = 0
   let currentArray = []
   
   for (let i=0; i<nums.length; i++){

   
       for (let j=i+1; j< nums.length; j++ ){
           let currentArray = nums.slice(i, j+1)
           let sum = currentArray.reduce((a,b)=> a+b)
           if( sum> maxNum) {
               maxNum = sum
           }
           
       }
   }
   return maxNum
}; 