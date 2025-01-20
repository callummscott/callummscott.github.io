
function getNStarPositions(N) {
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    let positions = [];
    for (let i = 0; i < N; i++) {
        let position = { left: Math.random()*viewportWidth, top: Math.random()*viewportHeight };
        positions.push(position);
    };
    return positions;
};

function getNStarSizes(N) {
    let sizes = [];
    for (let i = 0; i < N; i++) {
        const length = starSizeCorrectorModel1(Math.random());
        sizes.push( {svgLength: length*3, radius: length/2} );
    };
    return sizes;
};

function starSizeCorrectorModel1(p){
    // Basically takes in a random number from 0-1 and maps to a 'width' such that the
    // vast majority of cases will be small, and very few will be large.
    //   https://www.desmos.com/calculator/4yxcfremgo
    const e = Math.E;
    const a = .95; const b = 4.5; const c = 0.04; const d = 1.47;
    let correctedLength = Math.pow(e, Math.pow(e, Math.pow(e, p*d - a)) - b) + c;
    return correctedLength;
};


/** Exports */

export function createNStars(N) {

    const positions = getNStarPositions(N);
    const sizes = getNStarSizes(N);

    for (let i = 0; i < N; i++) {
        const pos = positions[i];
        const size = sizes[i];
        const starSvg = `<svg class="star" xmlns="http://www.w3.org/2000/svg" height="${size.svgLength}px" width="${size.svgLength}px" style="top:${pos.top}px; left:${pos.left};">\n  <circle fill="white" r="${size.radius}px" cx="${size.svgLength/2}px" cy="${size.svgLength/2}px"/>\n</svg>`;
        $("body").prepend(starSvg);
    };
};