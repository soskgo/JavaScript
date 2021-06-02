// 일자 유효성 검사 (0000-00-00,숫자)

const date = '2020-06-02' // 날짜 정상입력
// const date = '' // 날짜 미입력 
// const date = 'test-te-st' // 문자입력
// const date = '#@#$^%$^' //특수문자
const datePattern = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/

try {
    if (date) {
        if (datePattern.test(date)) {
            return console.log('날짜가 형식이 맞습니다. : ', date)
        } else {
            return console.log('날자 형식이 아닙니다.')
        }
    } else if (!date) {
        return console.log('입력 날짜가 없습니다.')
    }
} catch (error) {
    console.log(error)
}