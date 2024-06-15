let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function random(){
    let num = Math.ceil(Math.random()*3)
    return num
}

console.log(who[random()] + ' ' + action[random()] + ' ' + what[random()] + ' ' + when[random()])