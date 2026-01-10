let divContainer = document.getElementById("div-container");
let divContainer2 = document.getElementById("div-container2");
let divContainer3 = document.getElementById("div-container3");
let divContainer4 = document.getElementById("div-container4");



// Targeting the streak counter
const noSmokingStreak = document.querySelector("#streak-container");
const pushupStreak = document.querySelector("#streak-container1");
const webDevStreak = document.querySelector("#streak-container2");
const task4Streak = document.querySelector("#streak-container3");

let noSmokingCounter = -1;
let pushupCounter = -1;
let webDevCounter = -1;
let task4Counter = -1;


// ===========================================
function createStreak1() {
    let counter1 = 1;
    for(let i = 0; i < 90; i++) {
    let streakContainer = document.getElementById("streak-container");
    let div = document.createElement("div");
    div.id = `div ${counter1++}`
    div.classList.add("div1");
    streakContainer.append(div);

}


}

// EventListeners for each of the four buttons //
document.getElementById("no-smoking-button-incomplete").addEventListener("click", function() { 
    for(let i = 0; i < noSmokingStreak.children.length; i++) {
        noSmokingStreak.children[i].style.backgroundColor = "black";
        noSmokingStreak.children[i].style.borderColor = "red";
        noSmokingCounter = -1;
    }
            
});

// increments streak
document.getElementById("no-smoking-button-complete").addEventListener("click", function() {
    noSmokingCounter++;
    let noSmokingCounterStorage = noSmokingCounter;
    localStorage.setItem("noSmokingCounterStorage", noSmokingCounterStorage);
    console.log(noSmokingCounterStorage);
    noSmokingStreak.children[noSmokingCounter].style.backgroundColor = "greenyellow"; 
    noSmokingStreak.children[noSmokingCounter].style.borderColor = "greenyellow"; 


});



// ===========================================
function createStreak2() {
    let counter2 = 1; 
    for(let i = 0; i < 90; i++) {
    let streakContainer1 = document.getElementById("streak-container1");
    let div2 = document.createElement("div");
    div2.id = `div ${counter2++}`;
    div2.classList.add("div1");
    streakContainer1.append(div2);


}
}

document.getElementById("task2-button-incomplete").addEventListener("click", function() {
    for(let i = 0; i < pushupStreak.children.length; i++) {
        pushupStreak.children[i].style.backgroundColor = "black";
        pushupStreak.children[i].style.borderColor = "red";
        pushupCounter = -1;
    }
});

document.getElementById("task2-button-complete").addEventListener("click", function() {
    pushupCounter++;
    let pushupCounterStorage = pushupCounter;
    localStorage.setItem("pushupStorage", pushupCounterStorage);
    pushupStreak.children[pushupCounter].style.backgroundColor = "greenyellow";
    pushupStreak.children[pushupCounter].style.borderColor = "greenyellow"

});


// ===========================================
function createStreak3() {
    let counter3 = 1;
    for(let i = 0; i < 91; i++) {
    const streakContainer2 = document.getElementById("streak-container2");
    let div3 = document.createElement("div");
    div3.id = `div3${counter3++}`;
    div3.classList.add("div1");
    streakContainer2.append(div3);
}
}


document.getElementById("task3-button-incomplete").addEventListener("click", function() {
    for(let i = 0; i < webDevStreak.children.length; i++ ) {
        webDevStreak.children[i].style.backgroundColor = "black";
        webDevStreak.children[i].style.borderColor = "red";
        webDevCounter = -1;
    }
});

document.getElementById("task3-button-complete").addEventListener("click", function() {
    webDevCounter++;
    let webDevCounterStorage = webDevCounter;
    localStorage.setItem("webDevStorage", webDevCounterStorage);
    webDevStreak.children[webDevCounter].style.backgroundColor = "greenYellow";
    webDevStreak.children[webDevCounter].style.borderColor = "greenYellow";
});





function createStreak4() {
    let counter4 = 1;
    for(let i = 0; i < 91; i++) {
        const streakContainer3 = document.getElementById("streak-container3");
        let div4 = document.createElement("div");
        div4.id = `div4${counter4++ }`;
        div4.classList.add("div1");
        streakContainer3.append(div4);

}
}

document.getElementById("task4-button-incomplete").addEventListener("click", function () {
    for(let i = 0; i <  task4Streak.children.length; i++ ) {
        task4Streak.children[i].style.backgroundColor = "black";
        task4Streak.children[i].style.borderColor = "red";
        task4Counter = -1;
        

    } 
});

document.getElementById("task4-button-complete").addEventListener("click", function() {
    task4Counter++;
    let task4CounterStorage = task4Counter;
    localStorage.setItem("Task4Storage", task4CounterStorage);
    task4Streak.children[task4Counter].style.backgroundColor = "greenyellow";
    task4Streak.children[task4Counter].style.borderColor = "greenyellow";
});

createStreak1();
createStreak2();
createStreak3();
createStreak4();


// =============Adding data to local storage==================
// check to see if localStorage is empty or not

    // for(let i = 0; i <= reloadTask; i++) {
    //     task4Streak.children[i].style.backgroundColor = "greenyellow";
    //     task4Streak.children[i].style.borderColor = "greenyellow";
    // }

let reloadTask = localStorage.getItem("Task4Storage");
function reloadPage() {
    if(reloadTask >= 1) {
        for(let i = 0; i <= reloadTask; i++) {
            task4Streak.children[i].style.backgroundColor = "greenyellow";
            task4Streak.children[i].style.borderColor = "greenyellow";
            console.log(reloadTask)
        }
    } else{
        console.log("something isn't working");
    }

    task4Counter = reloadTask;
    console.log(`this should be your updated value ${task4Counter}`);

}


    // let reloadTask = localStorage.getItem("Task4Storage");
    // console.log(reloadTask);
    // for(let i = 0; i < reloadTask; i++) {
    //     console.log(`hello world`)
    // }
reloadPage();



