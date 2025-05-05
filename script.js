const mainBox = document.getElementById("mainBox");
const clickableBtn = document.getElementById("clickable");
const yourNr = document.getElementById("your-nr");
const selected = document.getElementById("selected");
const game = document.getElementById("game");
const arrSel = [];
let gameNr = 0


const arrHundredLabels = () => {
    const arrLabels = [];
    for (let i = 1; i < 101; i++) {
        arrLabels.push(i);
    }
    return arrLabels;
} 

const randomNums = () => {
    const arrNums = [];
    for (let i = 1; i < 101; i++) {
        arrNums.push(i);
    }
    let index = arrNums.length;

    while (index !=0) {
        let randomArr = Math.floor(Math.random() * index);
        index--;
        [arrNums[index], arrNums[randomArr]] = [
            arrNums[randomArr], arrNums[index]];
    }
    return arrNums
}

const onceRandomNums = randomNums();

const addToSelected = (x) => {
    const selectedArr = [];
    selectedArr.push(x.target.textContent);
    return selectedArr;
}

const boxes = () => {
    for (i = 0; i < 100; i++) {
    const box = document.createElement("div");
    box.classList.add("numBoxes");
    mainBox.appendChild(box);
    }
    mainBox.childNodes.forEach((el, i) => el.textContent = arrHundredLabels()[i]);
}
boxes();

const box = [...document.querySelectorAll(".numBoxes")];

const clicked = (x) => {
    box[x].classList.add("numBoxesClicked");
    mainBox.childNodes[x].textContent = onceRandomNums[x];
}

const reset = () => {
        mainBox.childNodes.forEach((el, i) => {
            el.textContent = arrHundredLabels()[i];
            el.classList.remove("numBoxesClicked");
})
        selected.textContent = "00";
        yourNr.textContent = "000";
        }

const areYouDead = (arr) => {
    if(arr.includes(yourNr.textContent) && arr.length <= 50) {
        alert("You win!")
        reset();
        gameNr++
        game.textContent = gameNr
    } else if (arr.length === 50) {
        alert("You're done.");
        reset();
        gameNr++
        game.textContent = gameNr
    }
}

box.forEach((el, i) => {
    el.addEventListener("click", (e) => {
    if (!box[i].classList.contains("numBoxesClicked")) {
        clicked(i);
        arrSel.push(e.target.textContent)
        selected.textContent = arrSel.length
        areYouDead(arrSel)
    }
}
)
})

clickableBtn.addEventListener("click", () => {

    yourNr.textContent = Math.floor(Math.random() * 100 + 1);
})

//next: compare arrnums with "your number"(also produce number).