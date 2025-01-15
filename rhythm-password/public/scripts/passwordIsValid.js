const LOGS = false; // Tried setting up config.json file but it just really didn't want to import fs.


export function passwordIsValid(log, ideal, errorMargin) {

    // Definitely the most complicated thing I've figured out in JS so far
    const idealLength = ideal.length;

    //* This part converts raw times into seconds relative to earliest (valid) time.
    let relativeInput = log.map( element => (element - log[0])/1_000);

    if (LOGS) {console.log(`Relative input:`, relativeInput)};

    if (log.length >= idealLength) {
        // If log.length is less than what's expected, then it can't possibly be right
        // but if log.length is longer, it might still contain a valid sequence.

        // spaceLeft represents the remaining wiggle-room to make the rhythm 'fit'
        let spaceLeft = 2*errorMargin;
        let phase = 0;

        // Iterates through all potential slices, with lengths that match `idealLength`, of `actualInput`
        let slice; let space; let gap;
        for (let j = 0; j < (log.length-idealLength + 1); i++) {

            slice = relativeInput.slice(j, j+idealLength);
            if (LOGS) {console.log(`slice:`, slice)};

            // For a given potential slice, this part loops through every element and performs the phase checks etc.
            //  if phase checks fail, then password is invalid; if loop exits without returning false, must be valid
            for (let i = 0; i<idealLength; i++) {

                let x = slice[i];
                let y = x-errorMargin + phase;

                let yIdeal = ideal[i];
                let upperBound = yIdeal+errorMargin;
                let lowerBound = yIdeal-errorMargin;
                
                space = upperBound - y;
                if (space < spaceLeft) {spaceLeft = space};

                if (LOGS) {console.log(`i:${i}, x:${x.toFixed(5)}, y:${y.toFixed(5)}, yIdeal:${yIdeal.toFixed(3)}, bounds:[${lowerBound.toFixed(5)}, ${upperBound.toFixed(5)}], phase:${phase.toFixed(5)}, spaceLeft:${spaceLeft.toFixed(5)}`)};

                // All this space is mainly just comments, but I'll keep them
                if ( y < lowerBound ) {
                    gap = lowerBound - y;
                    phase += gap;
                    if ( (0 <= gap) && (gap <= spaceLeft) ) {
                        spaceLeft -= gap;
                        if (LOGS) {
                            console.log("Out of bounds, but space still left");
                            console.log(`Phase updated: ${phase.toFixed(5)}, spaceLeft: ${spaceLeft.toFixed(5)}`);
                        }
                    } else {
                        if (LOGS) {console.error("Failed: no space left!");}
                        return false;
                    };
                } else if (y > upperBound) {
                    if (LOGS) { console.error(`y:${y.toFixed(5)} is beyond saving :(`) };
                    return false;
                } else {
                    if (LOGS) {console.log(`y:${y.toFixed(5)} is in bounds.`)};
                };
            };
            return true;
        };
        // Assuming it's passed through the whole list without fail...
        return false;
    } else {
        return false;
    };
};
