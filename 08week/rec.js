 // In a repl.it called Exponent of Number - Recursively
// Write a recursive JavaScript program to compute the exponent of any number given. Note : The exponent of a number says how many times the base number is used as a factor.
// Example: If you were given the number 64: 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
// Turn in the url



let expo = (x, n) => {
    if(n == 0){
      return 1;
    }
    else {
      return x * expo(x, n - 1);
    }
   }
   console.log(expo(8,2))
   
   
   
   
   // In a new repl.it called, Sum of Array - Recursively
   // Write a recursive JavaScript program to compute the sum of an array of integers.
   // Example : var array1 = [1, 2, 3, 4, 5, 6] sumArr(array1) // => Expected Output : 21
   // Turn in the url
   var arraySum = function(myArray){
     if(myArray.length ===1) {
       return myArray[0];
     }
     else{
       return myArray.pop() + arraySum(myArray);
     }
   };
   console.log(arraySum([1,2,3,4,5,6]));