const users = [
    { name: "A", age: 22 },
    { name: "B", age: 17 },
    { name: "C", age: 30 }
];


function getAdults(users) {
    let adults = [];
    let length = users.length;
    for (let i = 0; i < length; i++) {
        if (users[i].age > 18) {
            adults.push(users[i]);
        }
    }

    return adults;
}

console.log("getAdults", getAdults(users));

const users1 = [
    { id: 1, name: "Jitendra" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Amit" }
];

function getNames(users) {
    let names = [];
    let length = users.length;
    // for(let i=0; i<length; i++){
    //     names.push(users[i].name);   
    // }
    let usersObj = {};
    users.forEach((user) => {
        names.push(user.name)
        usersObj[user.id] = user.name;
    })

    console.log(usersObj)

    return names;
}

console.log("getNames", getNames(users1))
