var correctPoints = 0;
var incorrectPoints = 0;

function updateProgressBar() {
    const progressBar = document.querySelector(".progress");
    const maxPoints = 10; // Assuming you have 9 questions
    const percentage = (correctPoints / maxPoints) * 100; // Calculate percentage
    progressBar.style.width = percentage + "%"; // Update width of progress bar

    const percentageBacker = document.querySelector(".percentage_backer");
    const maxPointsText = 10; // Assuming you have 9 questions
    const percentageText = (correctPoints / maxPointsText) * 100; // Calculate percentage
    percentageBacker.textContent = `${percentageText.toFixed()}%`; // Update percentage text
}

function startQuiz() {
    document.querySelector(".question1_backer").style.display = "none";
    document.querySelector(".question2_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "1/9"

    correctPoints = 0;
    incorrectPoints = 0;
    updateProgressBar();
}

// QUESTION 1 START
function answer21() {
    document.querySelector(".question2_backer").style.display = "none";
    document.querySelector(".question3_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "2/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer22() {
    document.querySelector(".question2_backer").style.display = "none";
    document.querySelector(".question3_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "2/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer23() {
    document.querySelector(".question2_backer").style.display = "none";
    document.querySelector(".question3_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "2/9"

    correctPoints ++;
    updateProgressBar();
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer24() {
    document.querySelector(".question2_backer").style.display = "none";
    document.querySelector(".question3_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "2/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
// QUESTION 1 END

// QUESTION 2 START
function answer31() {
    document.querySelector(".question3_backer").style.display = "none";
    document.querySelector(".question4_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "3/9"

    correctPoints ++;
    updateProgressBar();
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer32() {
    document.querySelector(".question3_backer").style.display = "none";
    document.querySelector(".question4_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "3/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer33() {
    document.querySelector(".question3_backer").style.display = "none";
    document.querySelector(".question4_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "3/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer34() {
    document.querySelector(".question3_backer").style.display = "none";
    document.querySelector(".question4_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "3/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
// QUESTION 2 END

// QUESTION 3 START
function answer41() {
    document.querySelector(".question4_backer").style.display = "none";
    document.querySelector(".question5_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "4/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer42() {
    document.querySelector(".question4_backer").style.display = "none";
    document.querySelector(".question5_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "4/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer43() {
    document.querySelector(".question4_backer").style.display = "none";
    document.querySelector(".question5_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "4/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer44() {
    document.querySelector(".question4_backer").style.display = "none";
    document.querySelector(".question5_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "4/9"

    correctPoints ++;
    updateProgressBar();
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
// QUESTION 3 END

// QUESTION 4 START
function answer51() {
    document.querySelector(".question5_backer").style.display = "none";
    document.querySelector(".question6_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "5/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer52() {
    document.querySelector(".question5_backer").style.display = "none";
    document.querySelector(".question6_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "5/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer53() {
    document.querySelector(".question5_backer").style.display = "none";
    document.querySelector(".question6_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "5/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer54() {
    document.querySelector(".question5_backer").style.display = "none";
    document.querySelector(".question6_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "5/9"

    correctPoints ++;
    updateProgressBar();
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
// QUESTION 4 END

// QUESTION 5 START
function answer61() {
    document.querySelector(".question6_backer").style.display = "none";
    document.querySelector(".question7_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "6/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer62() {
    document.querySelector(".question6_backer").style.display = "none";
    document.querySelector(".question7_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "6/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer63() {
    document.querySelector(".question6_backer").style.display = "none";
    document.querySelector(".question7_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "6/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer64() {
    document.querySelector(".question6_backer").style.display = "none";
    document.querySelector(".question7_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "6/9"

    correctPoints ++;
    updateProgressBar();
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
// QUESTION 5 END

// QUESTION 6 START
function answer71() {
    document.querySelector(".question7_backer").style.display = "none";
    document.querySelector(".question8_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "7/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer72() {
    document.querySelector(".question7_backer").style.display = "none";
    document.querySelector(".question8_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "7/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer73() {
    document.querySelector(".question7_backer").style.display = "none";
    document.querySelector(".question8_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "7/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer74() {
    document.querySelector(".question7_backer").style.display = "none";
    document.querySelector(".question8_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "7/9"

    correctPoints ++;
    updateProgressBar();
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
// QUESTION 6 END

// QUESTION 7 START
function answer81() {
    document.querySelector(".question8_backer").style.display = "none";
    document.querySelector(".question9_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "8/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer82() {
    document.querySelector(".question8_backer").style.display = "none";
    document.querySelector(".question9_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "8/9"

    correctPoints ++;
    updateProgressBar();
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer83() {
    document.querySelector(".question8_backer").style.display = "none";
    document.querySelector(".question9_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "8/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer84() {
    document.querySelector(".question8_backer").style.display = "none";
    document.querySelector(".question9_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "8/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
// QUESTION 7 END

// QUESTION 8 START
function answer91() {
    document.querySelector(".question9_backer").style.display = "none";
    document.querySelector(".question10_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "9/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer92() {
    document.querySelector(".question9_backer").style.display = "none";
    document.querySelector(".question10_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "9/9"

    correctPoints ++;
    updateProgressBar();
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer93() {
    document.querySelector(".question9_backer").style.display = "none";
    document.querySelector(".question10_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "9/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
function answer94() {
    document.querySelector(".question9_backer").style.display = "none";
    document.querySelector(".question10_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = "9/9"

    incorrectPoints ++;
    console.log("Correct" + correctPoints);
    console.log("Incorrect" + incorrectPoints);
}
// QUESTION 8 END

// QUESTION 9 START
function answer101() {
    document.querySelector(".question10_backer").style.display = "none";
    document.querySelector(".questions_counter_backer").innerHTML = "Done"

    correctPoints += 2;
    updateProgressBar();
    console.log(correctPoints);
    console.log(incorrectPoints);
    determineResult();
}
function answer102() {
    document.querySelector(".question10_backer").style.display = "none";
    document.querySelector(".questions_counter_backer").innerHTML = "Done"
    
    incorrectPoints += 2;
    console.log(correctPoints);
    console.log(incorrectPoints);
    determineResult();
}
// QUESTION 9 END

function determineResult() {
    if (correctPoints >= 9) {
        document.querySelector(".result_backer_win").style.display = "flex";
    } else if (correctPoints <= 8) {
        document.querySelector(".result_backer_fail").style.display = "flex";
    }
}

function winAgain() {
    document.querySelector(".result_backer_win").style.display = "none";
    document.querySelector(".question1_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = ""

    correctPoints = 0;
    incorrectPoints = 0;
    updateProgressBar();
}

function tryAgain() {
    document.querySelector(".result_backer_fail").style.display = "none";
    document.querySelector(".question1_backer").style.display = "flex";
    document.querySelector(".questions_counter_backer").innerHTML = ""

    correctPoints = 0;
    incorrectPoints = 0;
    updateProgressBar();
}