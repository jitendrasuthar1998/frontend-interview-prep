// array sum
let arr1 = [1, 2, 3, 4];

let arr2 = [1, 2, 3, 4, 6, 6, 6, 9, 0];

function arraySum(arr) {
    // let sum = 0;
    // let length = arr.length;
    // for(let i=0; i<length; i++){
    //     sum = arr[i] + sum;
    // }

    // return sum

    let sum = arr.reduce((acc, current) => current + acc, 0);

    return sum;
}

console.log("arraySum", arraySum(arr2))


function arrayMul(arr) {
    let mul = arr.reduce((acc, curr) => curr * acc, 0);

    return mul;
}

console.log("arrayMul", arrayMul(arr1))