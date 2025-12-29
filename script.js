let divContainer = document.getElementById("div-container");
let divContainer2 = document.getElementById("div-container2");
let divContainer3 = document.getElementById("div-container3");
let divContainer4 = document.getElementById("div-container4");

function createStreak1() {
    for(let i = 0; i < 91; i++) {
    let div = document.createElement("div");
    div.id = "div1";
    divContainer.append(div);

}
}
function createStreak2() {
    for(let i = 0; i < 91; i++) {
    let div1 = document.createElement("div");
    div1.id = "div2";
    divContainer2.append(div1);

}
}
function createStreak3() {
    for(let i = 0; i < 91; i++) {
    let div3 = document.createElement("div");
    div3.id = "div3";
    divContainer3.append(div3);

}
}
function createStreak4() {
    for(let i = 0; i < 91; i++) {
    let div4 = document.createElement("div");
    div4.id = "div4";
    divContainer4.append(div4);

}
}

createStreak1();
createStreak2();
createStreak3();
createStreak4();
