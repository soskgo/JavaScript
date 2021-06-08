const socialSecurityNumber = '750615-1862133' // true
// const socialSecurityNumber = '123456-1234567' //false

if (ssnCheck(socialSecurityNumber)) return console.log('주민번호가 맞습니다.')
else return console.log('주민번호가 잘못됐습니다. 다시 입력하세요.')

function ssnCheck(socialSecurityNumber) {
    const pattern = /^[0-9]{6}\-[0-9]{7}$/ // 00000-0000000 형식, 숫자들만 들어있는지 체크
    try {
        if (pattern.test(socialSecurityNumber)) {
            const ssnArray = socialSecurityNumber.split('-').join('').split('')
            //5.뺀 결과와 검증코드가 같은지 판단한다.
            if (parseInt(ssnArray[12]) === verificationCode(ssnArray)) return true
            else return false
        } else return false
    } catch (error) {
        console.log(error)
    }
}

function verificationCode(ssnArray) {
    const newSsnArray = []
    const codeArray = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]
    let sum = 0
    for (i = 0; i < ssnArray.length - 1; i++) {
        newSsnArray.push(parseInt(ssnArray[i]))
    }
    // 1.주민번호 마지막 숫자만 제외하고 미리 지정된 값(234567892345)을 각각 곱한다.
    // 2.각 자리에 곱한 결과를 모두 더해준다.
    for (i = 0; i < codeArray.length; i++) {
        sum = sum + newSsnArray[i] * codeArray[i]
    }
    // 3.더한 결과를 11로 나눈다.(나머지 연산)
    // 4.11에서 나머지 결과를 뺀다.
    return 11 - (sum % 11)
}