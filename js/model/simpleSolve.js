function SimpleSolve(score,answers){
  this.score = score;
  this.answers = answers;
}

SimpleSolve.prototype.getSimpleSolve = function(){

  var results = this.getSimpleSolveAnswers();

  for(var i = 0;i < results.length; i++){

    var temp = $("#f"+i);
    if(temp.val() == results[i].answer[0]){
      this.score._getScore(results[i].unitScore);
    }
  }
};



SimpleSolve.prototype.getSimpleSolveAnswers = function(){
     var answers = this.answers;
     var results = [];
     for(var x=0; x < answers.length;x++){

       if(answers[x].type == "simpleSolve"){
         results.push(answers[x]);
       }
     }
     return results;

};
