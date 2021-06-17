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


// Test 데이터
class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];


// 5. 학생에서 점수가 90인것만 추출
const resultFind = students.find((student)=>student.score===90)
console.log(resultFind)

// 6. true인것만 추출
const resultFilter = students.filter((student)=>student.enrolled)
console.log(resultFilter)

// 7. map을 사용하여 점수 *2 변환
const resultMap = students.map((student)=>student.score*2)
console.log(resultMap)

// 8. 배열안에서 점수가 50점이하인 사람이 있는지 없는지 체크
const resultSome = students.some((student)=>student.score<=50) // 있으면 true
console.log(resultSome)

const resultEvery = students.every((student)=>student.score<=50) // 있으면 false
console.log(resultEvery)

// 9. 배열안에서 점수의 평균
const resultReduce = students.reduce((prev,curr)=>{ // prev = 이전 , curr = 현제 , reture 값이 있어야 prev에 들어간다.
    return prev + curr.score
},0)

console.log(resultReduce/students.length)