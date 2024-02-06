function f(){
    let b = 9
    let a = 11
    console.log(b)
    console.log("a inside fun" + a)
}
f();

// default parameter
function hello(name){
    console.log("Hello" + name)
}
hello("Mg Mg")

// template literals
var userName = "Admin"
var age = 20
 function Greeting(){
    console.log(`Nice to see you ${userName} ${age}`)
    console.log(`Lorem uaiojkf jorj ousg osue.
    oeorif osji jvoir ldofsie jdov
    jgoier kjgos jsoi dgori.`)
 }
 Greeting()

//  arrow function =>
const sum = (x, y) => console.log(x + y)
sum(10, 20)

// spread operator ...
let arr1 = [1,2,3,4]
arr1.push(5)
console.log(arr1)
arr1 = [...arr1, 6, 7, "hello"]
console.log(arr1)

let arr2 = [10, 20, 30]
arr3 = [...arr1, ...arr2]
console.log(arr3)

// destructuring assignment
let fruits = ["apple","orange","banana"]
const apple = fruits[0]
const orange = fruits[1]
const banana = fruits[2]
const [newApple, newOrange, newBanana] = fruits
console.log(newApple)

let person = {
    name: "Bob",
    personAge: 22,
    address: "Yangon",
    hobby: {
        hobby1: "reading",
        hobby2: "swimming"
    }
}

// const personName = person.name
const {name: personName, personAge, address, hobby: {hobby1,hobby2}} =person
console.log(personName)

// rest operator
function numbers(a, b, ...rest){
    console.log(a)
    console.log(b)
    console.log(rest)
}
numbers(1, 2, 3, 4, 5, 6)

// set
let myNum = [1,2,3,4,3,2,4,5]
let uniqueArr = new Set(myNum)
console.log([...uniqueArr])

// Map
let students = ["aung", "aye", "bobo"]
function mapStudent(){
    students.map((student)=> {
        console.log(`hello ${student}`)
    })
}
mapStudent()

// filter
const filterArr = students.filter((stu)=> stu !== "aye")
console.log(`filter result ${filterArr}`)


// reduce
const marks = [100,200,300]
const total = marks.reduce(
    (accumulator, currentValue) => accumulator+ currentValue, 0)
    console.log("Total marks ", total)

const persons = [
    {name : "aa", age: 17},
    {name : "bb", age: 20}
]
const personname = persons.map((person) => person.name)
console.log(personname)