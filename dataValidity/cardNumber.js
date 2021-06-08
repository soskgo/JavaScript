const cardNumber = '4579-7300-7124-7055'

if(checkCardNumber()){
  console.log('카드번호가 맞습니다.')
}else if(!checkCardNumber()){
  console.log('카드번호를 확인하세요.')
}

function checkCardNumber() {
  const cardNumberArray = cardNumber.split('-').join('').split('')
  const multiplyArray = []
  for(i=0;i<cardNumberArray.length-1;i++){
    // 홀수는 *1 짝수는*2 하면서 배열에 넣는다
    if(i%2){
      const result = cardNumberArray[i]*1
      // 곱이 10 이상일때 첫번째, 두번째 자리수를 더한다
      if(result>=10){
        multiplyArray.push(resultChage(result))
      }else multiplyArray.push(result)
    }else{
      const result = cardNumberArray[i]*2
      if(result>=10){
        multiplyArray.push(resultChage(result))
      }else multiplyArray.push(result)
    }
  }
  // 배열의 합을 구한다
  const sum = resultSum(multiplyArray)
  // 검증 코드를 구한다
  const verificationCodeNumber = verificationCode(sum)

  // 카드번호 마지막과 검증코드가 같은지 판단하여 결과 리턴
  if(verificationCodeNumber===cardNumberArray[15]) return true
  else return false
}

// 곱이 10이상일때 처리함수
function resultChage(result) {
  const resultSplit = result.toString().split('')
  const changeResult = parseInt(resultSplit[0])+parseInt(resultSplit[1])
  return changeResult
}

// 배열합 구하는 함수
function resultSum(multiplyArray) {
  let sum =0
  multiplyArray.forEach(element => {
    sum+=element
  });
  return sum
}

// 검증코드 구하는 함수
function verificationCode(sum) {
  const sunEndNumber = sum.toString().split('')[1]
  return sunEndNumber
}