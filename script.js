let music=new Audio("Winning.mp3");
let ting=new Audio("ting.mp3");
var turn='X';
let gameOver=false;
//function for change turn
 let changeTurn=()=>{
  console.log("change Turn is called");
   return turn==="X"?"0":"X"
 }
 //check win
 let checkWin =()=>{
  console.log("check win called");
  let boxText=document.getElementsByClassName("boxtext");
      let arr=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
      ]
      arr.forEach((e)=>{
        if((boxText[e[0]].innerHTML===boxText[e[1]].innerHTML)&&((boxText[e[1]].innerHTML===boxText[e[2]].innerHTML)&&(boxText[e[0]].innerHTML!==""))){
          document.getElementById("turnInfo").innerText=boxText[e[0]].innerText + "Won"
          gameOver=true;
          turn =" ";
          music.currentTime=0;
          music.play();
          document.querySelector('.imagebox').getElementsByTagName("img")[0].style.width=100;
          document.querySelector('.line').style.width="20vw";
          document.querySelector('.line').style.transform =`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
      })
 }
 Array.from(document.getElementsByClassName("box")).forEach(element=>{
    let boxtext=element.querySelector(".boxtext"); //not document.querySelector it's element.querySelector
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML===''){
            boxtext.innerHTML=turn;
            ting.play();
            checkWin();
            if(!gameOver){
              turn = changeTurn();
            document.getElementById("turnInfo").innerHTML="Turn for"+" "+turn;
            }
        }
    })
 })
 //reset button
 document.getElementById("reset").addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach((element)=>{
        element.innerHTML='';
        gameOver=false;
        music.pause();
        turn="X";
        document.querySelector('.imagebox').getElementsByTagName("img")[0].style.width="0px";
        document.querySelector('.line').style.width="0vw";
    })
 })
