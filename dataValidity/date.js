// 일자 유효성 검사 (0000-00-00, 숫자, 미래날짜x)

const inputDate = '2021-06-02' // 입력날짜
const datePattern = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/

if (dateCheck(inputDate)) return console.log('입력 날짜가 형식에 맞습니다.')
else if (!dateCheck(inputDate)) return console.log('입력 날짜 형식, 미래의 날짜 입력을 확인하세요.')

function dateCheck(inputDate) {
    try {
        // 입력 날짜가 정규표현식에 맞는지 체크
        if (datePattern.test(inputDate)) {
            var now = nowDate()
            if (inputDate > now) return false
            else return true
        } else return false
    } catch (error) {
        console.log(error)
    }
}

// 현제 날짜 구하기
function nowDate() {
    let today = new Date()
    let year = today.getFullYear().toString() // 현재년도
    let month = (today.getMonth() + 1).toString() // 현재월
    let date = (today.getDate()).toString() // 현재날짜

    if (month.length < 10 || date < 10) {
        month = '0' + month
        date = '0' + date
    }
    return year + '-' + month + '-' + date
}