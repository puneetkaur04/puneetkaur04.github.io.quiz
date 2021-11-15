function check()
{
    var score=0;
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    
    if(q1=="B")
    {
        score++;
        document.getElementById('result2').innerHTML = "<br> You got question one RIGHT! <br>";
    }
    else
    {
        document.getElementById('result2').innerHTML = "<br> You got question one WRONG! <br>";
    }

    if (q2 == "C")
    {
        score++;
        document.getElementById('result2').innerHTML = document.getElementById('result2').innerHTML + "You got question two RIGHT! <br>";
    }
    else
    {
        document.getElementById('result2').innerHTML = document.getElementById('result2').innerHTML + "You got question two WRONG! <br>";
    }

    if(q3=="A")
    {
        score++;
        document.getElementById('result2').innerHTML = document.getElementById('result2').innerHTML + "You got question three RIGHT! <br>";
    }
    else
    {
        document.getElementById('result2').innerHTML = document.getElementById('result2').innerHTML + "You got question three WRONG! <br>";
    }

    if(q4=="C")
    {
        score++;
        document.getElementById('result2').innerHTML = document.getElementById('result2').innerHTML + "You got question four RIGHT! <br>";
    }
    else
    {
        document.getElementById('result2').innerHTML = document.getElementById('result2').innerHTML + "You got question four WRONG! <br>";
    }

    if(q5=="A")
    {
        score++;
        document.getElementById('result2').innerHTML = document.getElementById('result2').innerHTML + "You got question five RIGHT! <br>";
    }
    else
    {
        document.getElementById('result2').innerHTML = document.getElementById('result2').innerHTML + "You got question five WRONG! <br>";
    }
    
    var percent= (score/5)*100;
  
    document.getElementById('result').innerHTML= "Your score is: " + parseInt(percent)+"%";

    if (percent < 100)
    {
        document.getElementById('message').innerHTML= "<br>'Failure does not come from losing, <br> but from not trying.' - Larry Brown <br> <br> Try Again! You got this! :)";
    }
    else
    {
        document.getElementById('message').innerHTML= "<br> That was impressive. Great Job! <3"
    }
}

// reset() function is used to reload the current document
function reSet()
{

    // reload() method does the same as the reload button in the browser
    location.reload();

    // scroll to the top of the document
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
