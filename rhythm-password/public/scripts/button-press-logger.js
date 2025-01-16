
export var pressLog = [];

export function logPress(ideal, errorMargin) {
    "Requires an 'ideal' log and error margins because log is 'trimmed' of old entries"
    let time = +new Date();   // of form '1728206207943' (in ms)

    pressLog.push(time);
    logTrimmer(pressLog, ideal, errorMargin);
};


function logTrimmer(log, ideal, errorMargin) {
    let range = (array) => { return array.at(-1) - array.at(0); };
    
    const validRange = range(ideal) + 2*errorMargin;
    let timesOutsideValidRange = (array) => {
        //*  Must convert `pressLog` from (ms) to (s) to compare with units of `ideal`
        return range(array)/1000 > validRange;
    };
    
    // Remove first entries that are too long ago from the most recent
    while (timesOutsideValidRange(log)) {
        log.splice(0,1);
    };
};