// MENU MOBILE OPEN AND CLOSE
$('.toggle-menu').click(function () {
    $(this).toggleClass('on');
    $('.resize').toggleClass('active')
})
$('.resize ul li a').click(function () {
    $(this).toggleClass('on');
    $('.resize').toggleClass('active')
})
$('.toggle-close').click(function () {
    $(this).toggleClass('on');
    $('.resize').toggleClass('active')
})

// CURSOR HOVER CHANGE BACKGROUND
let cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})


//TOGGLE DARKMODE
const body = document.querySelector('body');
const modeToggle = document.querySelector(".dark-toggle");
const gridFlex = document.querySelector(".grid_flex");
let getMode = localStorage.getItem("mode");

if (getMode && getMode === "dark-mode") {
    body.classList.add("dark")
    gridFlex.classList.add("dark")
    
}
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle('dark')
    gridFlex.classList.toggle('dark')

    // LOCALSTORAGE MODEDARK
    // code to keep user selected mode even page refresh or file open
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
})
// galeria hover
let btn = document.querySelector(".button");
let clipPathAnimation = gsap.to(".hovered-img", 1, {
    paused: true,
    clipPath: "polygon(0 0, 100% 0, 100% 100%,0 100%)",
    ease: "power4.inOut",
    stagger: {
        from: "random",
        amount: 0.75,
    },
});
btn.addEventListener("mouseenter", () => {
    clipPathAnimation.play()
});
btn.addEventListener("mouseleave", () => {
    clipPathAnimation.reverse()
});