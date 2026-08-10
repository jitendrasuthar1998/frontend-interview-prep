// javascript

// frequency => map

// question can be asked like return the frequency of each character
// return the character with max frequency
// character with at least 2 frequency

function frequency(str) {
    const strMap = new Map();
    let length = str.length;
    for (let i = 0; i < length; i++) {
        let char = str.charAt(i);
        if (strMap.has(char)) {
            strMap.set(char, strMap.get(char) + 1)
        } else {
            strMap.set(char, 1);
        }
    }

    console.log("strMap", strMap);


    // char with max frequency
    let maxFreq = 0;
    let maxFreqChar = "";

    let charWithTwoFreq = [];

    strMap.forEach((value, key) => {

        if (value >= 2) {
            charWithTwoFreq.push(key);
        }

        if (maxFreq < value) {
            maxFreq = value;
            maxFreqChar = key
        }
    })

    console.log("maxFreq", maxFreq);
    console.log("maxFreqChar", maxFreqChar)
    console.log("charWithTwoFreq", charWithTwoFreq)
}

frequency("appllle");

frequency("javascccrript");


