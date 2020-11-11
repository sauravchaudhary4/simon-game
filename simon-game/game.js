let playerSequence=[];
let sequence=[];
let colors=["green","red","yellow","blue"];
let started=false;
let level=1;

$(".btn").on( "click",function() {
  addAnimation(this);
  addSound(this);

  let color=$(this).attr('id');
  playerSequence.push(color);

  let clickResult= checkSequence(playerSequence,sequence);

  if (clickResult==false){
    $("h1").text("game over, refresh the page to play again.");
    let audio = new Audio("sounds/wrong.mp3");
    audio.play();
  }
  else if (clickResult==true){
    //level++;
    //$("h1").text("level "+level);
    if (sequence.length===playerSequence.length){
      level++;
      $("h1").text("level "+level);
      setTimeout(function(){
        playRound();

      }, 500);
    }

  }




});// adding event listener ends

if (started===false){
  $(document).on("keydown",function(){

    started=true;

    $("h1").text("level "+level);

    playRound();


  } );
}
function playRound(){
  //console.log("inside while loop");

  playerSequence=[];

  let randInt=Math.floor(Math.random() * 4);
  sequence.push(colors[randInt]);


  let currentButton=$("#"+colors[randInt]);


  addAnimation(currentButton);
  addSound(currentButton);

}//playRound functon ends



function checkSequence(playerSequence,sequence){
  for (let i=0;i<playerSequence.length;i++){
    if (sequence[i] != playerSequence[i]){

      return false;


    }
  }//for loop ends

  return true;

}// checkSequence functon ends

function addAnimation(element){
  //console.log("addig animation in "+element);
  $(element).addClass("pressed");
  setTimeout(function(){
    $(element).removeClass("pressed");

  }, 300);

}// addAnimation function ends

function addSound(element){

  let color=$(element).attr('id');
  let audio = new Audio("sounds/"+color+".mp3");
  audio.play();
};// addSound function ends
