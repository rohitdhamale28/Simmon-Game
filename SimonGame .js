let gameSeq=[];
let userSeq=[]

let btns=["yellow","red","blue","green"]

let h3= document.querySelector("h3");

let count=0;
let gamestart=false;

document.addEventListener("keypress", function(){
    if(gamestart == false){
        console.log("Game Started");
        gamestart=true;  
        levelUp1();
     }
    
        
})

function levelUp1(){
    count++;
    h3.innerText= `Level ${count}`;
    let rndidx= Math.floor(Math.random()*4);
    let rndcolor=btns[rndidx];
    let rndbtn=document.querySelector(`.${rndcolor}`);
    console.log(rndidx);
    console.log(rndcolor);
    console.log(rndbtn);
    btnFlash(rndbtn);
    gameSeq=[rndcolor];
    console.log(gameSeq);
}

function levelUp2(){
    count++;
    h3.innerText= `Level ${count}`;
}


function btnFlash(box){
    box.classList.add(`flash`);
    setTimeout(() => {
                box.classList.remove(`flash`);
            }, 400);
          
}

let a=document.querySelectorAll(".box");

for(let i of a){
    i.addEventListener("click",function(){
        console.log("clicked")
        btnFlash(this);
        levelUp2();
       setTimeout(() => {
        gameFlash();
       }, 1500); 
    })
}

function gameFlash(){
    let rndidx= Math.floor(Math.random()*3);
    let rndcolor=btns[rndidx];
    let rndbtn=document.querySelector(`.${rndcolor}`); 
    gameSeq[count-1]=rndcolor;
    console.log(gameSeq);
    btnFlash(rndbtn);
}