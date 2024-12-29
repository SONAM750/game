let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
    const ranidx=Math.floor(Math.random()*3);
    return option[ranidx];
};
const drawgame=()=>{
    msg.innerText="game was draw.play again";
    msg.style.backgroundColor="#081b31";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! `//your  ${userchoice} beats  ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`you lose.`//${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const playgame=(userchoice)=>{
  const compchoice = gencompchoice();
  if(userchoice===compchoice){
    drawgame();
  }else{
    let userwin=true;
    if(userchoice==="rock"){
        //paper,scissor
        userwin=compchoice==="paper"?false:true;
    }else if(userchoice==="paper"){
        //rock,scissor
        userwin=compchoice==="scissor"?false:true;
    }else{
        //rock,paper
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});

