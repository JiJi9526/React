// Day 1 (1)
let arrayOne=[1,2,3]
let arrayTwo=["A","B","C"]
let arrayThree=[11,22,33]

// Day 1 (2)
let mergeOneTwo = [...arrayOne, ...arrayTwo]
console.log(mergeOneTwo)

// Day 1 (3)
let mergeTwoThree = [...arrayTwo, ...arrayThree]
console.log(mergeTwoThree)

// Day 1 (4)
mergeTwoThree = [...mergeTwoThree,4,5,6]
console.log(mergeTwoThree)

// Day12 1
let user={userName: "Kyaw",age: 24,city: "Yangon",todos: {t1:"cooking" ,t2:"sleeping"}}
let {userName,age,city,todos: {t1,t2}}=user
console.log(userName)
console.log(age)
console.log(city)
console.log(t1)
console.log(t2)

// Day12 2
let arr= ["apple", "orange",[1,2,3]]
let [fruit1,fruit2,nextArray]=arr
console.log(fruit1)
console.log(fruit2)
console.log(nextArray)


// Assignment 3
const users=[
    {firstName:"john",lastName:"Biden",age:20,address:"Texas"},
    {firstName:"jimmy",lastName:"cob",age:75,address:"Hawaii"},
    {firstName:"sam",lastName:"lewis",age:50,address:"California"},
    {firstName:"Ronald",lastName:"Mathew",age:16,address:"New York"},  
  ]

//   1
function mapUser(){
    users.map((user)=> {
        console.log(`hello ${user.firstName} ${user.lastName}`)
    })
}
mapUser()

// 2
const filterArr = users.filter((user)=> user.age > 20) .map((user) => user.firstName)
console.log(filterArr)


// 3
const hawaii = users.filter((user)=> user.address == "Hawaii").map((user)=> user.firstName)
console.log(hawaii)

// Q4
numbers = [100,200,300,400]
total = numbers.reduce(
    (a, b) => a+ b, 100)
    console.log(total)
