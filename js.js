let boxes = document.querySelectorAll("#box");
let resetbtn = document.querySelector("#resetbtn");

let wcontain = document.querySelector(".wcont");
let winmsg = document.querySelector(".winmsg")

let turn0 = true;
wpattrens = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];



const checkWinner = () => {
    for(let pattern of wpattrens){
        let posVal1 = boxes[pattern[0]].innerText
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(posVal1 !="" && posVal2!="" && posVal3!=""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                console.log("winner !")
                showWinner(posVal1);
            }
    }
    
}
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box clicked")
        if(turn0){
        box.innerText = "O"
        turn0 = false;
        box.style.color="red";
        }
        else{
            box.innerText = "X";
            turn0 = true;
            box.style.color="black";
        }
        box.disabled = true
        checkWinner();
})
})

const showWinner = (winner) =>{
    winmsg.innerText = `Congratulations ! Winner is "${winner}"`
    disableBoxes();
    wcontain.classList.remove("hide");
    resetbtn.innerText = "Another game ?"
}

const resetgame = () =>{
    turn0 = true;
    enableBoxes();
    wcontain.classList.add("hide");
    resetbtn.innerText = "Reset Game"
}
    

const disableBoxes =  ()=>{
    boxes.forEach(box => box.disabled = true);
}

const enableBoxes = () =>{
    boxes.forEach(box => box.disabled = false);
    boxes.forEach(box => box.innerText = "");
    
}

resetbtn.addEventListener("click",resetgame);