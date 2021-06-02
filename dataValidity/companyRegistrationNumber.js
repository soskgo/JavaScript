// 사업자 등록번호 유효성 검사 (535-81-37985,숫자)

const companyRegistrationNumer = '123-45-67891'

checkCompanyRegistrationNumer(companyRegistrationNumer)

function checkCompanyRegistrationNumer(companyRegistrationNumer) {

    const crnPattern = /^[0-9]{3}\-[0-9]{2}\-[0-9]{5}$/
    try {
        // 1.입력된 사업자 번호의 형식에 맞는지(숫자이외 문자, 숫자자리수 부족)
        if (companyRegistrationNumer) { // 입련된 사업자 번호가 존재o
            if (crnPattern.test(companyRegistrationNumer)) {
                // 2. 1번과정 통과시 -제거
                const crnSplit = parseInt(companyRegistrationNumer.split('-').join(''))
                // 3. 배열로 만들기
                const crnArray = Array.from(crnSplit.toString()).map(Number)
                // 4. 사업자번호 앞 9자리 인증키 9자리의 각 자리수를 각각 곱하여 전부 더한다.
                let sum = 0
                let key = [1, 3, 7, 1, 3, 7, 1, 3, 5]
                for (i = 0; i < 9; i++) {
                    sum += (crnArray[i] * key[i])
                }
                console.log(10 - ((sum + Math.floor(key[8] * Number(companyRegistrationNumer[8]) / 10)) % 10)) == Number(companyRegistrationNumer[9]);
                return (10 - ((sum + Math.floor(key[8] * Number(companyRegistrationNumer[8]) / 10)) % 10)) == Number(companyRegistrationNumer[9]);
                // 5. 사업자번호 뒤에서 2번째자리와 인증키 마지막 값을 곱하고 10으로 나눈 후 위의 합과 추가로 더한다.
                // sum += Math.floor(crnArray[8] * key[8] / 10) % 10
                // // 6. 합계를 10으로 나머지 연산을 한다.
                // t = Math.floor(sum / 10) % 10
                // // 7. 10에서 나머지 연산의 값을 뺀다.
                // r = 10 - t
                // // 8. 사업자번호 마지막자리와 마지막 처리한값이 같으면 사업자번호이다.
                // console.log(r)

            } else {
                // 숫자이외 문자, 숫자자리수 부족
                console.log('입력된 사업자 번호가 잘못되었습니다.')
            }
        } else if (!companyRegistrationNumer) {
            // 입력된 사업자 번호가 존재x
            console.log('사업자등록번호를 미입력 하였습니다.')
        }
    } catch (error) {
        console.log(error)
    }

    // // 각 8번배열의 값을 곱한 후 10으로 나누고 내림하여 기존 합에 더합니다.
    // // 다시 10의 나머지를 구한후 그 값을 10에서 빼면 이것이 검증번호 이며 기존 검증번호와 비교하면됩니다.
    // return (10 - ((sum + Math.floor(key[8] * Number(companyRegistrationNumer[8]) / 10)) % 10)) == Number(companyRegistrationNumer[9]);
}