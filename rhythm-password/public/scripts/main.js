import { pressLog, logPress } from "./button-press-logger.js";
import { passwordIsValid } from "./password-validator.js";
import { rollCredits } from "./roll-credits.js";

const button = $("#THE-BUTTON");
const clue = $("#clue");

const errorMargin = 0.05 /* i.e. you have 100ms of wiggle-room around each of the beats */
const idealInput = [
    0,
    0.37037037037037035,
    0.7407407407407407,
    1.4814814814814814,
    1.8518518518518519,
    2.2222222222222223,
    2.962962962962963,
    3.3333333333333335,
    3.7037037037037037,
    4.444444444444445
];

const start = new Date();
var clickCounter = 0;
var gameEnd = false

button.on({
    mousedown:  () => {
        button.addClass("pressed");
        logPress(idealInput, errorMargin);
        if (passwordIsValid( pressLog, idealInput, errorMargin)) {
            gameEnd=true; rollCredits(start);
        };
        clickCounter += 1;
        if (clickCounter >= 16 && (!gameEnd)) { $("#clue").show() };
    },
    mouseup:    () => {button.removeClass("pressed");},
    touchstart: () => {button.addClass("pressed");},
    touchend:   () => {button.removeClass("pressed");}
});

clue.on("click", () => {
    clue.html( (clue.html() == "Clue?")
        ? "<a href=\"https://www.youtube.com/watch?v=-tJYN-eG1zk\">\"We will 🪨 you...\"</a>"
        : "Clue?"
    );
});

$(document).on("keypress", (e) => {
    if (e.key == ' ' || e.key == "Enter") {
        button.mousedown();
        setTimeout( button.mouseup.bind(button), 50);
    };
});





// function hasTouchSupport() {
//     return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
// };
  
// if (hasTouchSupport()) {
//     console.log("Touch-screen device detected");

// } else {
//     console.log("Non touch-screen device detected");
// };