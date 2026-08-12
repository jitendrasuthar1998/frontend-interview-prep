//removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

//[1,2,2,3,4,4,5]

function removeDuplicates(arr) {

    let length = arr.length;

    let index = 0;

    for (let i = 0; i < length; i++) {
        if (arr[i] != arr[i + 1]) {
            arr[index] = arr[i];
            index++;
        }
    }

    return arr;


}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))