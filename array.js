// 1. Array to String  배열을 문자열로 변환
const fruitsArray = ['apple','banana','orange'];
const fruitsResultString = fruitsArray.join(' '); //join 할때 구분자를 넣어서 문자열 만들수 있다.
console.log(fruitsResultString)

// 2. Array out of String 문자열을 배열로 변환
const fruitsString = 'apple,banana,orange'
const fruitsSplit = fruitsString.split(',') //split에 구분자를 넣어야한다.
console.log(fruitsSplit)

// 3. 배열의 순서를 거꾸로 변환
const array = ['🍎', '🥝', '🍌',' 🍒']
const reverseArray = array.reverse()
console.log(reverseArray)

// 4. 배열에서 필요한 부분만 새로운 배열로 만들기
const numberArray =[1,2,3,4,5,6,7,8,9]
const numberSplice = numberArray.splice(1,5) // 1~5번쨰만 추출
console.log(numberSplice)
