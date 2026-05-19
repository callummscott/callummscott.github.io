/* Colour palette testing. */

const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(el => {
    let open = false;
    const heading = el.querySelector('h4');
    const paragraphs = el.querySelectorAll('p');
    el.addEventListener('click', () => {
        const svg = heading.querySelector('svg');
        svg.style.transform = (open) ? "" : 'rotate(180deg)';
        paragraphs.forEach(p => {
            p.style.display = (open) ? "none" : "block";
            el.style.width = (open) ? "fit-content" : "100%";
        });
        open = !open;
    });
});

// clicked = false;

// colorChanger.addEventListener('click', () => {
//     clicked = !clicked;
//     document.querySelector('header').style.backgroundColor = clicked ? "#21213b" : "#b6e6fc";
//     document.querySelector('body').style.backgroundColor = clicked ? "#121226" : "#80d3fa";
// });


// Loading messages:

const loadingMessages = [
    // "<code>theorem TheQuestion [Decidable «to be»] : «to be» ∨ ¬«to be» :=<br>&emsp;&emsp; sorry</code>",
    "developing software developer. 🪴",
    "working on it. 👨‍💻",
    "getting there. 🧗",
    "still getting better 📈",
    "learning. 📚",
    "running (from) tests... 🏃‍♂️‍➡️",
    "debugging... 🐛",
    // "3.7.15.1.292.1.1.1.2...",
    "thinking... 💭",
    "<code># TODO: Think of more loading messages.</code>",
    "just trying stuff... 👨‍🦯‍➡️",
    "fingers crossed. 🤞",
    "have you met my friend … hashmaps?",
    "<code>@pytest.mark.skip(reason='because I said so.')</code>",
    // "<code>Uncaught TypeError: claude.addThisApi is not a function</code>",
    "\"no, no idea — I got actual lightning in a bottle.\"",
    "<code>\"q=how%20to%20undo%20rm%20-rf\"</code> 🥲",
    // ""
]

bannerTagline = document.getElementById("banner-tagline");

const currentHour = new Date().getHours();
if (0 <= currentHour && currentHour < 6) {
    loadingMessages.push("definitely time to sleep.. 🌙")
} else if (6 <= currentHour && currentHour < 12) {
    loadingMessages.push("good morning! 🌄")
}
// Add more...

const splashIndex = Math.floor(Math.random()*loadingMessages.length);
bannerTagline.innerHTML = loadingMessages[splashIndex];
