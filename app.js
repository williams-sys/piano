let chord = document.getElementById("chord");
let pianoMemory = [];
let list = document.getElementById("list");

function run(x) {
    const a = new Audio(`sound/${x}.mp3`)
    a.play();
    chord.value += x +",";
    console.log(`U play ${x} key`);
}

function saveChord(){
    let input = chord.value;
    pianoMemory.push(input);
    console.log(`save ${input} in memory`)
    chord.value = "";
    list.innerHTML = "";
    pianoMemory.map(function (el,index) {
        list.innerHTML += `<li class="p-2">${el} <button class="btn btn-primary" onclick="rePlay(${index})">Replay</button></li>`;
    })
}

let m = ["C4","C5","E4","C4","C5","E4","C4","C5","E4","C4","C5","E4"];

function runMemory(arr,delay=400) {
    let x = delay;
    arr.map(function (el,index) {
        setTimeout(run,x,el);
        x += delay;
    })
}


function rePlay(x) {
    let current = pianoMemory[x].split(",");
    current.pop();
    runMemory(current);
}


document.addEventListener("keyup",function (e) {
    console.log(e.keyCode);
    let current = e.keyCode;

    if (current == 65){
        run('C4');
    }else if (current == 83){
        run('D4');
    }else if (current == 68){
        run('E4');
    }else if (current == 70){
        run('F4');
    }else if (current == 74){
        run('G4');
    }else if (current == 75){
        run('A4');
    }else if (current == 76){
        run('B4');
    }else if (current == 186){
        run('C5');
    }
})