
const imageBtns = document.querySelectorAll(".item");
for (const button of imageBtns) {
    console.dir(button);
    button.addEventListener("click", function() {
        const popover = button.nextElementSibling;
        popover.style.display = "flex";
        
    });
};

const popovers = document.querySelectorAll(".popover");
for (const popover of popovers) {
    popover.addEventListener("click", function() {
        popover.style.display = "none";
    });
};
