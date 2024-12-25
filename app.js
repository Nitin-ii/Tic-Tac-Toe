let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

// possibility of winning
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
// resetGame
const resetGame=() =>{
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let turn=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turn){
            box.innerText="0";
            turn=false;
       }
       else{
           box.innerText="X";
           turn=true;
       }
       box.disabled=true;

       checkWinner();
    });
});

// to diable after winner
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
// to again play 
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}

// display show winner
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// check winner
const checkWinner=()=>{
for(let pattern of winPatterns){
    let pos1Val= boxes[pattern[0]].innerText;
    let pos2Val= boxes[pattern[1]].innerText;
    let pos3Val= boxes[pattern[2]].innerText;
if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        
        showWinner(pos1Val);
    }
}

}
};
// to resetGame or to newGame
newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);