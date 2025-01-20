
const imageBtns = document.querySelectorAll(".item");
for (const button of imageBtns) {
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
