function factorial(n){
    if (n===0 || n===1) {
        return 1
    }
    return n*factorial(n-1)
}
let n = parseInt(prompt('Enter the number to find the factorial'))
let result = factorial(n)
alert(`Factorial of ${n} is ${result}`)