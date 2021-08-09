// Object Destructuring

const person = {
    name:'sangMin',
    age:26
}

function displayPerson(person) {
    const {name,age} = person // person.name , person.age 처럼 할 필요없이 변수에 할당하여 사용
    displayName(name)
    displayAge(age)   
}
