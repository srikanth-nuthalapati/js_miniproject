
let count = 0;
document.getElementById("increase").onclick = function() {
    count++;
    document.querySelector("h1").innerHTML = count;
}

document.getElementById("decrease").onclick = () => {
    count--;
    document.querySelector("h1").innerHTML = count;
}

document.getElementById("reset").onclick = () => {
    count = 0;
    document.querySelector("h1").innerHTML = count;
}