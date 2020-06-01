function init() {
    const dots = document.querySelectorAll(".dot");
    const btnHireMe = document.querySelector("#btn-hireme");
    const btnProjects = document.querySelector("#btn-projects");

    btnHireMe.addEventListener("click", function() {
        changeDot(dots[2]);
    });
    btnProjects.addEventListener("click", function() {
        changeDot(dots[1]);
    });
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            changeDot(this);
        });
    });

    function changeDot(element) {
        dots.forEach(dot => {
            dot.classList.remove("active");
        });
        element.classList.add("active");
    }
}

init();