//Take an array of numbers and return the sum.

function returnSum(arrayNumber) {
    let sum = 0;
    for (i = 0; i < arrayNumber.length; i++) {
        sum += arrayNumber[i];

    }
    return sum;
}

const numbers = [1, 3, 5, 7, 9]
let newArrayNumber = returnSum(numbers);
console.log(newArrayNumber) //25

//take an array of numbers and return the average.
//https://www.sitepoint.com/community/t/understanding-how-average-of-an-array-works/388466/2
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const sum = numbers.reduce(function (total, number) {
    return total + number;
})
const average = sum / numbers.length;
console.log(average) //5

//Take an array of strings and return the longest string.
//https://www.geeksforgeeks.org/how-to-get-the-longest-string-in-an-array-using-javascript/



function longString(long) {
    let newString = "";
    for (let i = 0; i < long.length; i++) {
        if (typeof long[i] === 'string' && long[i].length > newString.length) {
            newString = long[i]
        }
    } return newString;
}

let stringArr = ["Hello", "computer", "functions"]
let bigString = longString(stringArr)
console.log(bigString)

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

let arrayOfStrings = ['say', 'hello', 'in', 'the', 'morning'];
let number = 3;

function longerString(longer) {
    let newString2 = [];
    for (let i = 0; i < longer.length; i++) {
        if (typeof longer[i] === 'string' && longer[i].length > number) {
            newString2.push(longer[i])
        }
    } return newString2;
}
let longLongString = longerString(arrayOfStrings);
console.log(longLongString)

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
//https://www.youtube.com/shorts/twIR53ziopc

function printNumber(n) {
    if (n < 1) {
        return;
    } printNumber(n - 1)
    console.log(n)
}

printNumber(20)


//Part 2: Thinking Methodically
const largeArray =
    [
        { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "48", name: "Barry", occupation: "Runner", age: "25" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }
    ]



//Sort the array by age.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

largeArray.sort((a, b) => a.age - b.age)
console.log(largeArray)

//Filter the array to remove entries with an age greater than 50
//https://www.geeksforgeeks.org/how-to-filter-an-array-of-objects-based-on-multiple-properties-in-javascript/#approach-1-using-the-filter-method
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function greaterThan(ageNumber) {
    return ageNumber <= 50;
}
const results = largeArray.filter(item => greaterThan(item.age))
console.log(results)

//Map the array to change the “occupation” key to “job” and increment every age by 1.
//https://stackoverflow.com/questions/68978955/transform-an-array-of-objects-with-map
//https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/

results2 = results.map((item) => {
    return {
        id: item.id,
        name: item.name,
        job: item.occupation,
        age: (item.age) * 1 + 1,
    }
})
console.log(results2)

//Use the reduce method to calculate the sum of the ages.
//Then use the result to calculate the average age.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const total = results2.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);

console.log(total); // 88

const averageAge = total / results2.length
console.log(averageAge) //29.33

//Part 3: Thinking Critically
//Take an object and increment its age field.



function ageIncrement(ageField) {
    if (ageField.age != 0) {
        ageField.age += 1
    }
    else {
        ageField.age += 2
    }
    updated_at = Date();// where to put it?
    
    return ageField;
}

const object1 = {
    id: "42",
    name: "Bruce",
    occupation: "Knight",
    age: 45,
}

let object2 = {};
object2 = ageIncrement(object1)
console.log(object2)

//Take an object, make a copy, and increment the age field of the copy. Return the copy.
let object3 =
{
    id: "57",
    name: "Bob",
    occupation: "Fry Cook",
    age: 19
}

let object4 = {...object3}
console.log(object4)

function incrementAge2(itemAge) {
    itemAge.age +=1
    return itemAge;
}

let object5 = incrementAge2(object4);
console.log(object5)
console.log(object4)