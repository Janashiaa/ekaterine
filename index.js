window.addEventListener('load', function() {
    prepare();
});

function prepare() {
    document.querySelector(".start_asker_backer").style.display = "flex";
    document.querySelector(".question1").style.display = "none";
    document.querySelector(".question2").style.display = "none";
    document.querySelector(".winner_backer").style.display = "none";
}

function start() {
    document.querySelector(".start_asker_backer").style.display = "none";
    document.querySelector(".question1").style.display = "flex";

    document.querySelector(".question1_agree").style.width = "100px"
    document.querySelector(".question1_agree").style.height = "40px"
    document.querySelector(".question2_agree").style.width = "100px"
    document.querySelector(".question2_agree").style.height = "40px"
}

function question1Disagree() {
    var question1Yes = document.querySelector(".question1_agree");
    var currentWidth1 = question1Yes.offsetWidth;
    var currentHeight1 = question1Yes.offsetHeight;
    var newWidth1 = currentWidth1 * 1.1;
    var newHeight1 = currentHeight1 * 1.1;

    question1Yes.style.width = newWidth1 + "px";
    question1Yes.style.height = newHeight1 + "px";
}

function question1Agree() {
    document.querySelector(".question1").style.display = "none";
    document.querySelector(".question2").style.display = "flex";
}

function question2Disagree() {
    var question2Yes = document.querySelector(".question2_agree");
    var currentWidth2 = question2Yes.offsetWidth;
    var currentHeight2 = question2Yes.offsetHeight;
    var newWidth2 = currentWidth2 * 1.1;
    var newHeight2 = currentHeight2 * 1.1;
    
    question2Yes.style.width = newWidth2 + "px";
    question2Yes.style.height = newHeight2 + "px";
}

function question2Agree() {
    document.querySelector(".question2").style.display = "none";
    document.querySelector(".winner_backer").style.display = "flex";
}

function tryAgain() {
    document.querySelector(".winner_backer").style.display = "none";
    document.querySelector(".start_asker_backer").style.display = "flex";
}