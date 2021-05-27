var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

//if we click on the start/reset
document.getElementById("startreset").onclick = function(){

    //if we are playing
    if(playing == true){
        location.reload(); //reload page

    }else{   //if we are not playing

        //change mode to playing
        playing = true;

        score = 0;   //Set score to zero

         //show countdown box
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining")
        timeremaining = 60;

        //hide gameover box
        hide("gameover")


        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";

        //Start Countdown
        startCountdown();

        //generate a new Q&A
        generateQA();

    } 
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        //check if we are palying
        if (playing == true){
            if(this.innerHTML == correctAnswer){
                //correct Answer
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                //Show Correct box and hide wrong box
                show("correct");
                hide("wrong");
                setTimeout(function(){
                    hide("correct");
                },1000)
    
                //Generate new QA
                generateQA()
            }
            else{
                //Wrong Answer
                show("wrong");
                hide("correct");
                setTimeout(function(){
                    hide("wrong");
                },1000)
            }
        }
    }
}
//Functions

//Start Counter
function startCountdown(){
    action = setInterval(function(){
            timeremaining -= 1;
            document.getElementById("timeremainingvalue").innerHTML = timeremaining;
            if(timeremaining == 0){
                stopCountdown();
                show("gameover");
                document.getElementById("gameover").innerHTML = "<p>Game Over!</p> <p>Your Score is "+score+".</p>";
                hide("timeremaining");
                hide("correct");
                hide("wrong");
                playing = false;
                document.getElementById("startreset").innerHTML = "Start Game";
            }
    },1000);
}

//Stop Counter
function stopCountdown(){
    clearInterval(action);
}

//hide an element
function hide(id){
    document.getElementById(id).style.display = "none";
}

//Show an element
function show(id){
    document.getElementById(id).style.display = "block";
}

function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "X" + y;
    var correctPosition = 1 + Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;


    var answers = [correctAnswer];
    //Fill with Wrong Answers 
    for (i=1;i<5;i++){
        if(i != correctPosition){
            //wrong Answer
            var wrongAnswer
            do{
                wrongAnswer = (1 + Math.round(9*Math.random())) + (1 + Math.round(9*Math.random()))
            }while(answers.indexOf(wrongAnswer)> -1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}


