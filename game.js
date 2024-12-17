let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newBtn = document.querySelector('#new-btn');
let msg = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container'); 
let trunO = true; //playerO, PlayerX

const winPatterns = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (trunO) {
            box.innerText = 'O';
            trunO = false;
        }
        else {
            box.innerText = 'X';
            trunO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const resetgame =()=>{
    enabledBtn();
    trunO = true
    msgContainer.classList.add('hide');
    for(let box of boxes){
        box.innerText = '';
    }
}

const enabledBtn = () =>{
    for(let box of boxes){
        box.disabled = false;
    }
}

const disabledBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (pos1Val)=>{
  msgContainer.classList.remove('hide');
  msg.innerText = `Winner is ${pos1Val}`;
  disabledBtn();
}


newBtn.addEventListener('click', resetgame);

resetBtn.addEventListener('click', resetgame);


const checkWinner = () => {
    for (let pattern of winPatterns) {
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log(`Winner is : ${pos1Val}`);
                showWinner(pos1Val);
            }
        }
    }
};
