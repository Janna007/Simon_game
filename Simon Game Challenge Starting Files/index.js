    
    
    //creating an array

    var buttonColours=["red","blue","green","yellow"]

    var gamePattern=[];

    var userClickedPattern=[];
    var gameHasStarted=false;
    var level=0;
    
    
     $(document).keydown(function(){
          if(!gameHasStarted){
               $("#level-title").text("level "+ level);
               nextSequence()
               gameHasStarted=true;
     
          }
      })
         

    
   $(".btn").click(function(){
     var userChosenColour=$(this).attr("id")
     userClickedPattern.push(userChosenColour);
     playSound(userChosenColour)
     animatePress(userChosenColour);

})



  //function for generating from 0 to 3

  function nextSequence(){

        level++;
        $("#level-title").text("level "+ level)

        let  randomNumber=Math.trunc(Math.random() *4) 
       
        var randomChosenColour=buttonColours[randomNumber];

       gamePattern.push(randomChosenColour)

       $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

       playSound(randomChosenColour);

      

      

  } 

 
 
  function playSound(name){
     var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();

    }
  function animatePress(currentColor){
     $("#" + currentColor).addClass("pressed");

     setTimeout(function () {
       $("#" + currentColor).removeClass("pressed");
     }, 100);
  }
