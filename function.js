// 1.parameters
// 오브젝트 할당후 파라미터로 전달하고 값을 변경
function changeName(obj) {
    obj.name='coder'
}
const sangmin = {name:'sangmin'}
changeName(sangmin)
console.log(sangmin)

// 2.default parameters (ES6)
// 파라미터로 입력 안된 값에 대해서 값지정
function showMessage(message,from='unknown') {
    console.log(`${message} by ${from}`)
}
showMessage('Hi!!!')

// 3.rester parameters (ES6)
// 파라미터를 배열형태로 전달할때
function printAll(...args) {
    for(let i=0;i<args.length;i++){
        console.log(args[i])
    }
}
printAll('choi','sang','min')

// 4.local scope
let globalMessage = 'global'
function printMessage() {
    let localMessage = 'local'
    console.log(localMessage)
    console.log(globalMessage)
}
printMessage()

// 5.return
// 파라미터로 들어온 값을 내부로직후 결과를 리턴
function sum(a,b) {
    return a+b
}
console.log(sum(1,2))


// 6.early return, early exit
// bad - 함수안에서 if,else 번갈아 사용하면 가독성이 떨어진다
function badUpgradeUser(user) {
    if(user.point<=10){
        // logic...
    }
}
// good - 조건이 맞지않으면 리턴을하여 함수종료
function goodUpgradeUser(user) {
    if(user.point<=10){
        return
    }
    // logic...
}

//7.callback function
function randomQuiz(answer,printYes,printNo) {
    if(answer==='love you'){
        printYes()
    }else{
        printNo()
    }
}
// 익명함수
const printYes = function () {
    console.log('yes!')
}
const printNo = function print() {
    console.log('no!!')
}

randomQuiz('love you',printYes,printNo)
randomQuiz('you',printYes,printNo)

//8.arrow function
// 화살표 함수
const arrowPrint = () => console.log('arrow function')
arrowPrint
const arrowSum = (a,b)=> a+b;
arrowSum(1,2)

//9.IIFE
// 함수 선언과 동시에 실행
(function hello() {
    console.log('선언과 동시에 실행')
})()