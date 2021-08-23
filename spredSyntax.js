// Spread Syntax - object

const item = { type: 'T-shirt', size: 'M' }
const detail = { price:30000, made:'korea', gender:'Man' }

// bad code 1
item['price'] = detail.price

// bad code 2
const newObject1 = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

// bad code 3
const newObject2 = {
    type: item.type,
    size: item.size,
    price: detail.price,
    made: detail.made,
    gender: detail.gender,
}

// good code 1
const newObject3 = Object.assign(item,detail) // assign() => 출처 객체로부터 모든 열거할 수 있는(enumerable) 하나 이상의 속성(own properties)들을 목표 객체로 복사

// good code 2
const newObject4 = {...item, ...detail, price:40} // item과 detail을 합치고 기존의 price값을 변경이 가능하다