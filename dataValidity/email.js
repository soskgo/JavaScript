// 이메일 유효성 검사
const email = 'soskgo@naver.com'

if (checkEmail(email)) {
    console.log('이메일 형식이 맞습니다.')
} else if (!checkEmail(email)) {
    console.log('이메일 형식이 아닙니다.')
}

function checkEmail(email) {
    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    try {
        if (pattern.test(email)) return true
        else return false
    } catch (error) {
        console.log(error)
    }
}