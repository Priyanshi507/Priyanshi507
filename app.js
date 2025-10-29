let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msgText = document.querySelector("#msg-Text");

let turn0 = true;
const winningcombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () =>{
    turn0 =true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwin();
    });
});
 
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
          box.innerText="";
    }
};

const showWinner=(b1) => {
    msgText.innerText=`${b1} has won the game!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkwin = () => {
    for (let combo of winningcombos) {
        let b1 = boxes[combo[0]].innerText;
        let b2 = boxes[combo[1]].innerText;
        let b3 = boxes[combo[2]].innerText; 
     if(b1!="" && b1===b2 && b2===b3){
        if(b1===b2 && b2===b3){
            showWinner(b1);
            alert( '${b1} has won the game!');
        }
     }
    }
};
newBtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);



