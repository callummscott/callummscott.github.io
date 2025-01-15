

export function rollCredits(startTime) {
    const main = $("main")
    main.css("background", "transparent");
    $("#THE-BUTTON").remove();

    const currentTime = +new Date();
    const totalTime = (currentTime - startTime.getTime())/1000;

    // Appending the credits
    let creditsContent = "";
    creditsContent = (totalTime < 10)
        ? `<h1>CONGRATULATIONS<br>It only took you ${totalTime.toFixed(3)}s to finish.</h1>`
        : `<h1>Wow!<br>It only took you ${totalTime.toFixed(3)}s!<br>Congrats!</h1>`;
    
    
    main.append(creditsContent);
    main.find("h1").addClass("credits");   
};
