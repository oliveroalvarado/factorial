// function factorial(num) {
//   return 0;
  
// }

// module.exports = factorial;


// const myArray = ["x", "y", "z"]
// const x = myArray[0]
// const y = myArray[1]
// const z = myArray[2]

//same as 
// this is destructuring
// const [x, y, z] =["x", "y", "z"]
// console.log(x)

// spread operator
const arr = [1 ,2 ,3]
const copyOfArr = [...arr, 4, 5, 6];
console.log(copyOfArr)

const obj = {
  one: 1,
  two: 2,
}

const copyOfObj = {...obj, three: 3}

console.log(copyOfObj)