

export function rollCredits(startTime) {
    const main = $("main");
    main.css("background-color", "transparent");
    $("body").css("background-color", "transparent");
    $("#THE-BUTTON").remove();
    $("#clue").remove();

    const currentTime = +new Date();
    const totalTime = (currentTime - startTime.getTime())/1000;

    // Appending the credits
    let creditsContent = "";
    creditsContent = (totalTime < 10)
        ? `<div id="credits"><h1>CONGRATULATIONS</h1><h1>Wow. It only took you ${totalTime.toFixed(3)}s to finish. Great job!</h1><div>`
        : `<div id="credits"><h1>Great job!</h1><h1>It took you ${totalTime.toFixed(3)}s to get through!</h1></div>`;
    
    main.append(creditsContent);


    const victoryScreen = document.getElementById('#credits');

    victoryScreen.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent default behavior
    });
};
