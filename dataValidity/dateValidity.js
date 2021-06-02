// 정규표현식을 이용한

// 1. 일자 유효성 체크 (0000-00-00형태,숫자)
// const date = '2020-06-02' // 날짜 정상입력
const date = '' // 날짜 미입력 
const datePattern = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/

if (date) {
    return console.log('오홍')
} else if (!date) {
    return console.log('입력 날짜가 없습니다.')
}