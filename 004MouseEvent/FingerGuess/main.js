function rock() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/rock.png\"/>"
    var myChoice = 0;
    var computerChoice = computerGuess();
    judge(myChoice,computerChoice);
}
function scissors() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/scissors.png\"/>"
    var myChoice = 1;
    var computerChoice = computerGuess();
    judge(myChoice,computerChoice);
}
function paper() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/paper.png\"/>"
    var myChoice = 2;
    var computerChoice = computerGuess();
    judge(myChoice,computerChoice);
}
function judge(myChoice,computerResult) {
    if(myChoice == computerResult){
        document.getElementById("result").innerHTML="平手";
    }else if(myChoice == 0){
        if (computerResult == 1) {
            document.getElementById("result").innerHTML = "你赢了";
        } else {
            document.getElementById("result").innerHTML = "你输了";
        }
    }else if(myChoice == 1) {
        if (computerResult == 2) {
            document.getElementById("result").innerHTML = "你赢了";
        } else {
            document.getElementById("result").innerHTML = "你输了";
        }
    }else{
        if (computerResult == 0) {
            document.getElementById("result").innerHTML = "你赢了";
        } else {
            document.getElementById("result").innerHTML = "你输了";
        }
    }

}
function computerGuess(){
    var r = Math.floor(3*Math.random());
    // document.body.innerHTML = r;
    if(r<1){//rock=0
        document.getElementById("computerChoice").innerHTML="<img src='images/rock.png' />";
    }
    else if(r<2){//scissors=1
        document.getElementById("computerChoice").innerHTML="<img src='images/scissors.png' />";
    }
    else{//paper=2
        document.getElementById("computerChoice").innerHTML="<img src='images/paper.png' />";
    }
    return r;
}
