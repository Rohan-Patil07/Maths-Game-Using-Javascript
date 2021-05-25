var playing = false;
var score;

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
        document.getElementById("timeremaining").style.display = "block";

        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
    } 
}
         //reload page
    //if we are not playing
        //Set score to zero
        //show countdown box
        //reduce time by 1sec in loops
             //timeleft?
                //yes->continue
                //no->gameover
            //change button to reset
            //generate new Q&A

//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for for 1sec
                //generate new question and answers
            //No
                //Show try Again for 1 sec
