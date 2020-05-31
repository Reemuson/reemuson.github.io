function init() {
    const dots = document.querySelectorAll(".slide");
    const slides = document.querySelectorAll(".page");

    let currentSlide = 0;
    let scrollSlide = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            changeDots(this);
            nextSlide(index);
            scrollSlide = index;
        });
    });

    function changeDots(dotElement) {
        dots.forEach(dot => {
            dot.classList.remove("active");
        });
        dotElement.classlist.add("active");
    }

    function nextSlide(pageNum) {
        const nextPage = pages[pageNum];
        const currentPage = pages[current];
        const nextText = nextPage.querySelector(".details");
    }
}