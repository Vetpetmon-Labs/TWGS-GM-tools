function calculate() {
    var turnInput = document.getElementById("turninp").value;
    var dayInput = document.getElementById("dayinp").value;
    var yearInput = document.getElementById("yearinp").value;

    var validInput1 = "false";
    var validInput2 = "false";
    var validInput3 = "false";

    if (turnInput > 30) {
        alert("Invalid input: A day can only have 30 turn sequences!");
        var validInput1 = "false";
    }
    else if (turnInput < 0) {
        alert("Invalid input: Days must start with 1 turn sequence.");
        var validInput1 = "false";
    }
    else if (turnInput <= 30) {
        var turnVal = parseInt(turnInput);
        //document.getElementById("debug").innerHTML = "DEBUG: VARIABLE \"TURNVAL\" IS: " + turnVal;
        var validInput1 = "true";
    }

    if (dayInput > 365) {
        alert("Invalid input: A year is 365 days!");
        var validInput2 = "false";
    }
    else if (dayInput < 0) {
        alert("Invalid input: Years must start at day 1.");
        var validInput2 = "false";
    }
    else if (dayInput <= 365) {
        var validInput2 = "true";
    }

    if (yearInput >= 1) {
        var validInput3 = "true";
    }
    else if (yearInput <= 0) {
        alert("Invalid input: Years can not be a negative number or zero.");
        var validInput3 = "false";
    }

    if (validInput1 == "true" && validInput2 == "true" && validInput3 == "true") {
        document.getElementById("turnsequence").innerHTML = turnInput;
        //Do time of day readings
        if (turnInput >= 1 && turnInput <= 10) {
            document.getElementById("timeofday").innerHTML = "MORNING";
        }
        else if (turnInput >= 11 && turnInput <= 20) {
            document.getElementById("timeofday").innerHTML = "AFTERNOON";
        }
        else if (turnInput >= 21 && turnInput <= 30) {
            document.getElementById("timeofday").innerHTML = "NIGHT";
        }

        //Do seasons reading
        if (dayInput >= 1 && dayInput <= 91) {
            document.getElementById("season").innerHTML = "1";
        }
        else if (dayInput >= 92 && dayInput <= 183) {
            document.getElementById("season").innerHTML = "2";
        }
        else if (dayInput >= 184 && dayInput <= 274) {
            document.getElementById("season").innerHTML = "3";
        }
        else if (dayInput >= 275 && dayInput <= 365) {
            document.getElementById("season").innerHTML = "4";
        }

        document.getElementById("day").innerHTML = dayInput;
        document.getElementById("year").innerHTML = yearInput;
    }

}

function nextTurn() {

    /*var turnVal = document.getElementById("turnsequence").value;
    var dayVal = document.getElementById("day").value;
    var yearVal = document.getElementById("year").value;*/

    var turnVal = parseInt(document.getElementById("turnsequence").innerHTML);
    var dayVal = parseInt(document.getElementById("day").innerHTML);
    var yearVal = parseInt(document.getElementById("year").innerHTML);

    if (turnVal < 30){
        document.getElementById("turnsequence").innerHTML = parseInt(document.getElementById("turnsequence").innerHTML) + 1;

        var turnVal = parseInt(document.getElementById("turnsequence").innerHTML);

        if (turnVal >= 1 && turnVal <= 10) {
            document.getElementById("timeofday").innerHTML = "MORNING";
        }
        else if (turnVal >= 11 && turnVal <= 20) {
            document.getElementById("timeofday").innerHTML = "AFTERNOON";
        }
        else if (turnVal >= 21 && turnVal <= 30) {
            document.getElementById("timeofday").innerHTML = "NIGHT";
        }
    }
    else if (turnVal == 30 && dayVal != 365){
        document.getElementById("turnsequence").innerHTML = 1;

        var turnVal = parseInt(document.getElementById("turnsequence").innerHTML);

        var dayVal = parseInt(document.getElementById("day").innerHTML) + 1;

        document.getElementById("day").innerHTML = dayVal;

        document.getElementById("timeofday").innerHTML = "MORNING";
        
        //Check season
        if (dayVal >= 1 && dayVal <= 91) {
            document.getElementById("season").innerHTML = "1";
        }
        else if (dayVal >= 92 && dayVal <= 183) {
            document.getElementById("season").innerHTML = "2";
        }
        else if (dayVal >= 184 && dayVal <= 274) {
            document.getElementById("season").innerHTML = "3";
        }
        else if (dayVal >= 275 && dayVal <= 365) {
            document.getElementById("season").innerHTML = "4";
        }

    }
    //If the amount of days now adds up to a year, reset TS, TOD, day, and season to base values.
    else if (turnVal == 30 && dayVal == 365) {
        document.getElementById("turnsequence").innerHTML = 1;
        document.getElementById("timeofday").innerHTML = "MORNING";
        document.getElementById("season").innerHTML = "1";

        var dayVal = 1;
        document.getElementById("day").innerHTML = dayVal;

        var yearVal = parseInt(document.getElementById("year").innerHTML) + 1;
        document.getElementById("year").innerHTML = yearVal;
    }

    //document.getElementById("debug").innerHTML = "DEBUG: VARIABLE \"TURNVAL\" IS: " + turnVal;

}