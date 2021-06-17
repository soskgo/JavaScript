// 1. Array to String  배열을 문자열로 변환
const fruitsArray = ['apple','banana','orange'];
const fruitsResultString = fruitsArray.join(' '); //join 할때 구분자를 넣어서 문자열 만들수 있다.
console.log(fruitsResultString)

// 2. Array out of String 문자열을 배열로 변환
const fruitsString = 'apple,banana,orange'
const fruitsSplit = fruitsString.split(',') //split에 구분자를 넣어야한다.
console.log(fruitsSplit)