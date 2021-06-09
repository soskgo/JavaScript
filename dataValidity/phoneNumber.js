// 휴대대폰번호 유효성 검사
const phoneNumber = '010-1234-4567'

if (phoneNumberCheck(phoneNumber)) return console.log('휴대폰번호가 맞습니다.')
else if (!phoneNumberCheck(phoneNumber)) return console.log('휴대폰번호 양식이 아닙니다.')

function phoneNumberCheck(phoneNumber) {
    const pattern = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/
    try {
        if (pattern.test(phoneNumber)) return true
        else return false
    } catch (error) {
        console.log(error)
    }
}