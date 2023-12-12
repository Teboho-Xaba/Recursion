function factorial(n){
    //the base case
    if(n == 1 || n == 0){
        return 1
    }
    //the recursive case
    else{
        return n * factorial(n-1)
    }
}
console.log(factorial(4))

// in the FACTORIAL function, whenever the base case fails we proceed to the next case (recursive case)
// where the Factorial function is called again but this time with a different parameter that it starts to execute
// The argument passed (4), is then what is used to execute/run the code to return the values of the FACTORIAL function in the "else" condition such as:
// 4 * (factorial(4-1) = 3)
//      3 * (factorial (3-1) = 2)
//          2 * (factorial (2-1) = 1)
//               when the next argument is already passed in the base case (n==1), then 1 is returned and our function is complete, thus the loop ceases to run.