//Global Variables
//This is where you will define the variables you will be using in your project.

//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var airScore = 0;
var fireScore = 0;
var earthScore = 0;
var waterScore = 0;
var result = document.getElementById("result");





//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//variables for second quiz question
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//variables for third quiz question
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//variables for fourth quiz question
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//variables for fifth quiz question
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", airResult);
q1a2.addEventListener("click", waterResult);
q1a3.addEventListener("click", fireResult);
q1a4.addEventListener("click", earthResult);

q2a1.addEventListener("click", airResult);
q2a2.addEventListener("click", waterResult);
q2a3.addEventListener("click", fireResult);
q2a4.addEventListener("click", earthResult);

q3a1.addEventListener("click", airResult);
q3a2.addEventListener("click", waterResult);
q3a3.addEventListener("click", fireResult);
q3a4.addEventListener("click", earthResult);

q4a1.addEventListener("click", airResult);
q4a2.addEventListener("click", waterResult);
q4a3.addEventListener("click", fireResult);
q4a4.addEventListener("click", earthResult);

q5a1.addEventListener("click", airResult);
q5a2.addEventListener("click", waterResult);
q5a3.addEventListener("click", fireResult);
q5a4.addEventListener("click", earthResult);


//#TODO: Define quiz functions here
function airResult(){
  questionCount+=1;
  airScore+=1;
   if (questionCount>=5) {
     updateResult();
   }
}

function waterResult() {
  questionCount+=1;
  waterScore+=1;
  
   if (questionCount>=5) {
     updateResult();
   }
}

function fireResult() {
  questionCount+=1;
  fireScore+=1;
  
   if (questionCount>=5) {
     updateResult();
   }
}

function earthResult() {
  questionCount+=1;
  earthScore+=1;
  
   if (questionCount>=5) {
     updateResult();
   }
}

function updateResult() {
  if (airScore>=2) {
    if(airScore>=3) {
      result.innerHTML="Aang";
    }
    
    else if (airScore>fireScore) {
      result.innerHTML="Aang";
    }
    
    else if (airScore>earthScore) {
      result.innerHTML="Aang";
    }
    
    else if (airScore>waterScore) {
      result.innerHTML="Aang";
    }
    
    else {
      result.innerHTML="Hmmm..try again!";
    }
  }
  
  else if (fireScore>=2) {
    if(fireScore>=3) {
      result.innerHTML="Zuko!";
    }
    
    else if (fireScore>airScore) {
      result.innerHTML="Zuko!";
    }
    
    else if (fireScore>earthScore) {
      result.innerHTML="Zuko!";
    }
    
    else if (earthScore>waterScore) {
      result.innerHTML="Zuko!";
    }
    
    else {
      result.innerHTML="Hmmm..try again!";
    }
  }
  
  else if (waterScore>=2) {
    if(fireScore>=3) {
      result.innerHTML="Katara!";
    }
    
    else if (waterScore>airScore) {
      result.innerHTML="Katara!";
    }
    
    else if (waterScore>earthScore) {
      result.innerHTML="Katara!";
    }
    
    else if (waterScore>fireScore) {
      result.innerHTML="Katara!";
    }
    
    else {
      result.innerHTML="Hmmm..try again!";
    }
  }
  
  else if (earthScore>=2) {
    
    if(fireScore>=3) {
      result.innerHTML="Toph!";
    }
    
    else if (earthScore>airScore) {
      result.innerHTML="Toph!";
    }
    
    else if (earthScore>waterScore) {
      result.innerHTML="Toph!";
    }
    
    else if (earthScore>fireScore) {
      result.innerHTML="Toph!";
    }
    
    else {
      result.innerHTML="Hmmm..try again!";
    }
    
  }
  
  else {
    result.innerHTML="Hmmm...try again!";
  }
}

