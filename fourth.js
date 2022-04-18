import Stack from './Stack.js'

function checkParenthesis(paren) {
    const item = paren.split("")
    const s = new Stack()
    const m = new Stack();
    item.forEach(v => {
        if(v == '(' || v == '{' || v == '['){
            s.push(v)
        } else {
            if(s.peek() == '(' && v == ')' || s.peek() == '[' && v == ']' || s.peek() == '{' && v == '}') {
                s.pop()
            } else {
                m.push(v)
            }
        }
    });
    return s.isEmpty() && m.isEmpty()
}

console.log(checkParenthesis('()'))