const socialSecurityNumber = '160807-2466314'

console.log(ssnCheck(socialSecurityNumber))

function ssnCheck(socialSecurityNumber) {
    const pattern = /^[0-9]{6}\-[0-9]{7}$/ // 00000-0000000 형식, 숫자들만 들어있는지 체크

    try {
        if (pattern.test(socialSecurityNumber)) {
            return true
        } else return false
    } catch (error) {
        console.log(error)
    }
}