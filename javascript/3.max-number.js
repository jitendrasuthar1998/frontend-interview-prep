// [5,2,11,9,10]

// find max number

function maxNumber(arr) {
    let max = arr[0];

    let length = arr.length;

    for (let i = 1; i < length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log("max number", maxNumber([5, 2, 11, 9, 10]))