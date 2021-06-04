// 사업자 등록번호 유효성 검사

const companyRegistrationNumer = '123-45-67891'

if (checkCompanyRegistrationNumer(companyRegistrationNumer)) {
    console.log('사업자등록 번호가 맞습니다.')
} else if (!checkCompanyRegistrationNumer(companyRegistrationNumer)) {
    console.log('사업자등록 번호가 아닙니다.')
}

function checkCompanyRegistrationNumer(companyRegistrationNumer) {
    const crnPattern = /^[0-9]{3}\-[0-9]{2}\-[0-9]{5}$/
    try {
        // 1.입력된 사업자 번호의 형식에 맞는지(숫자이외 문자, 숫자자리수 부족)
        if (companyRegistrationNumer) { // 입련된 사업자 번호가 존재o
            if (crnPattern.test(companyRegistrationNumer)) {
                // 2. 1번과정 통과시 -제거, 배열로 만들기
                let numberMap = companyRegistrationNumer.replace(/-/gi, '').split('').map(function (d) {
                    return parseInt(d, 10);
                });
                let keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
                let sum = 0;
                // 4. 사업자번호 앞 9자리 인증키 9자리의 각 자리수를 각각 곱하여 전부 더한다.
                keyArr.forEach(function (d, i) {
                    sum += d * numberMap[i];
                });
                // 5. 사업자번호 뒤에서 2번째자리와 인증키 마지막 값을 곱하고 10으로 나눈 후 위의 합과 추가로 더한다.
                // 6. 합계를 10으로 나머지 연산을 한다.
                // 7. 10에서 나머지 연산의 값을 뺀다.
                // 8. 사업자번호 마지막자리와 마지막 처리한값이 같으면 사업자번호이다.
                sum += parseInt((keyArr[8] * numberMap[8]) / 10, 10);
                return Math.floor(numberMap[9]) === ((10 - (sum % 10)) % 10);
            } else {
                // 숫자이외 문자, 숫자자리수 부족
                return false
            }
        } else if (!companyRegistrationNumer) {
            // 입력된 사업자 번호가 존재x
            return false
        }
    } catch (error) {
        console.log(error)
    }
}