// 1. nullish coalescing operator
// Bad Code
function printMessage(text) {
    let message = text;
    if(text==null||text==undefined){
        message = 'Nothing to display';
    }
    console.log(message)
}

// Good Code
function printMessage(text) {
    const message = text ?? 'Nothing to display'; // text가 null 이나 undefined가 아니면 message = text
    console.log(message)
}

printMessage('Hello') // Hello
printMessage(undefined) // Nothing to display
printMessage(null) // Nothing to display


function printMessage(text = 'Nothing to display') {
    console.log(text)
}

printMessage('Hello') // Hello
printMessage(undefined) // text의 디폴트값인 Nothing to display
printMessage(null) // null

// 2. Logical OR Operator
function printMessage(text) {
    const message = text || 'Nothing to display'; // text가 false이면 Nothing to display
    console.log(message)
}

printMessage('Hello') // Hello
printMessage(undefined) // Nothing to display
printMessage(null) // Nothing to display
printMessage(0) // Nothing to display
printMessage(-0) // Nothing to display
printMessage('') // Nothing to display
printMessage(NaN) // Nothing to display