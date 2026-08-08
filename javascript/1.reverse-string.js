// apple -> elppa

// mango -> ognam

function reverseString(str) {
    let reverseStr = "";
    let length = str.length;
    for (let i = length; i >= 0; i--) {
        reverseStr = reverseStr + str.charAt(i);
    }

    return reverseStr;
}

console.log(reverseString("mango"));

// reverseString("apple");

// reverseString("jaipur");