// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
//1
function solution(number){
  let sum = 0
  for (let i = 0; i < number; i++){
    if (i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  } return sum
}

/*
For this I set a variable to hold the sum. Then using a if statement, I checked if a number was a multiple of 3 or 5. If it was, it was added into the sum, then the sum was returned
*/

//2
function moveZeros(arr) {
  let newarr = [];
  let zero = []
  for (let i = 0; i < arr.length; i++){
      if (arr[i] !== 0){
      newarr.push(arr[i])
    } else {
      zero.push(arr[i])
    } 
  } 
  return newarr.concat(zero)
}

/*
I set two different empty arrays to hold the zeros and the other numbers. Using push I pushed the numbers that werent zeros into the newarr. If the numbers were 0, they got pushed into the zero array. Then I returned the newarr with the zero array concatenated at the end of it.
*/

//3
function likes(names) {
    const num = names.length-2
    if (names.length >= 4){
      return `${names[0]}, ${names[1]} and ${num} others like this`
    } else if (names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 1){
      return `${names[0]} likes this`
    } else {
      return "no one likes this"
    }
}

/*
I used if statements to see if the number of people who "liked the photo" was greater than or equal to 4. I also set a variable (num) for the instance where more than 4 people liked the photo. I then used string interpolation to create the return statements for each instance.
*/

//4
function duplicateCount(text){
  const newobj = {}
  let result = 0
  text.toLowerCase().split('').forEach((x)=>{
    if (!newobj[x]){
      newobj[x] = 1
    } else {
      newobj[x]++
    }
  }) 
  for (let key in newobj){
    if (newobj[key] > 1){
      result ++
    }
  } 
  return result
}

/*
Everytime I find a new letter, I'm checking if the letter is not a key in the oject and setting it to 1. Or if I have seen the letter before, add 1 to the key. Then I am looping through the object. If a property is bigger than 1, I add 1 to result because that would mean it is a dupliacte. Then I return result.
*/

//5
function findOutlier(integers){
  let even = integers.filter(element => element % 2 == 0)
  let odd = integers.filter(element => element % 2 !== 0)
  if (even.length < odd.length){
    return even[0]
  } else {
    return odd[0]
  }
}

/*
I made two variables one for even and one for odd. Using filter I checked which integer is the only odd one out of the even numbers and vice versa. Then I returned that number
*/

//6
function findUniq(arr) {
  return arr.filter(element => arr.indexOf(element) == arr.lastIndexOf(element))[0]
}

/*
I'm using a higher order method for this problem. By using filter, I am checking which element is different from the rest. Then I return that number
*/

//7
function pigIt(str){
  let x = str.split(' ')
  return x.map(element => {
    if (element.match(/\w/gi)){
      return element.slice(1, element.length) + element[0] + "ay"
    } else {
      return element
    }
  }).join(' ')
}

/*
I'm turning the string into an array. I use map to go through every word in the array. Then I use regex to check if the "word" is actually a word. Then if it matches that, I return everything but the first letter of the word. Followed by the 1st letter of the word, followed by "ay" at the end. If it doesn't pass the regex condition, then I'm returning it how it was. Finally I join the mapped array together
*/