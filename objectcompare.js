let obj1 = { name: "Person1", age: 5 };
let obj2 = { age: 5, name: "Person" };

let isEqual = true;

for (let key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
        if (obj1[key] !== obj2[key]) {
            isEqual = false;
            break;
        }
    } else {
        isEqual = false;
        break;
    }
}

console.log(isEqual);