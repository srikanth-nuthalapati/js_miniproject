let screen = document.querySelector("input")

let clear = document.getElementById("clear");
clear.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value = "";
});

let rem = document.getElementById("rem");
rem.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value  += rem.innerText;
});

let del = document.getElementById("del");
del.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value = screen.value.slice(0, screen.value.length - 1); 
});

let div = document.getElementById("div");
div.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value  += div.innerText;
});

let seven = document.getElementById("seven");
seven.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += seven.innerText;
});

let eight = document.getElementById("eight");
eight.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value  += eight.innerText;
});

let nine = document.getElementById("nine");
nine.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += nine.innerText;
});

let mul = document.getElementById("mul");
mul.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += mul.innerText;
});

let four = document.getElementById("four");
four.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += four.innerText;
});

let five = document.getElementById("five");
five.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += five.innerText;
});

let six = document.getElementById("six");
six.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += six.innerText;
});

let sub = document.getElementById("sub");
sub.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += sub.innerText;
});

let one = document.getElementById("one");
one.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += one.innerText;
});

let two = document.getElementById("two");
two.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += two.innerText;
});

let three = document.getElementById("three");
three.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += three.innerText;
});

let add = document.getElementById("add");
add.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += add.innerText;
});

let two00 = document.getElementById("two00");
two00.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += two00.innerText;
});

let zero = document.getElementById("zero");
zero.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += zero.innerText;
});

let dot = document.getElementById("dot");
dot.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value += dot.innerText;
});

let result = document.getElementById("result");
result.addEventListener("click", (event)=>{
    event.preventDefault();
    screen.value = eval(screen.value);
});