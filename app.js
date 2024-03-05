 let h3 = document.querySelector("h3");
 let GameSeq=[];
 let UserSeq=[];
 let btns=["r","y",'p','g'];
 let started=false;
 let level=0;
document.addEventListener("keypress",function () {
    if(started==false){
        started=true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function usrFlash(btn){
    btn.classList.add("usrflash");
    setTimeout(function(){
        btn.classList.remove("usrflash");
    },250);
}
function  levelUp(){
    UserSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    GameSeq.push(randColor);
    btnFlash(randBtn);
}
function chkAns(idx){
    if(UserSeq[idx] === GameSeq[idx]){
        if(UserSeq.length == GameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game Over!<b>Your Score was ${level-1}</b></br> Press any Key to Start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){document.querySelector("body").style.backgroundColor="white"},150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    usrFlash(btn);
    userColor = btn.getAttribute("id");
    UserSeq.push(userColor);
    chkAns(UserSeq.length-1);
}

let AllBtns = document.querySelectorAll(".btn");
for (btn of AllBtns) {
    btn.addEventListener("click",btnPress);
}
function reset() {
    started=false;
    GameSeq=[];
    UserSeq=[];
    level=0;
}