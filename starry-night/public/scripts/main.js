import { createNStars } from "./star-calculations.js";

var numberOfStars = {
    '1': 10,
    '2': 20,
    '3': 40,
    '4': 80,
    '5': 160,
    '6': 320,
    '7': 640,
    '8': 1280,
    '9': 2560,
    '0': 5120
}


$(document).on("keypress", (e) => {
    // console.log(e.key);
    const match = e.key.match(/\d/);
    if (match) {
        $(".star").remove();
        createNStars(numberOfStars[match]);
    };
});


function main() {
    createNStars(numberOfStars['6']); 
};

main();