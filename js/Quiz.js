class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     var unvis=new Question()
    unvis.hide()
    //write code to change the background color here
    background("orange")
    //write code to show a heading for showing the result of Quiz
var plyr=new Contestant()
    fill("black")
    text("Result  :",290,300)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
    //write condition to check if contestantInfor is not undefined
     //write code to add a note here
    if(allContestants!=undefined){
      fill("red")
      textSize(20)
      text("NOTE:All contestants with correct answers are highlited with green",100,270)
  }
   

    //write code to highlight contest who answered correctly
            for (var plr in allContestants){
            var correctAnswer="2"
            text(10)
            if(correctAnswer===allContestants[plr].answer)
            fill("green")
            else
            fill("red")

            text(+Contestant.name,320,300)
        }
    
  }

}
