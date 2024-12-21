const wrapper = document.querySelector(".wrapper2");
const carousel = document.querySelector(".carousel2");
const arrowBtns = document.querySelectorAll(".wrapper2 .i2");
const firstCardWidth = carousel.querySelector(".card2").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

/****************** */
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

//******************* */
carouselChildrens.slice(-cardPerView).reverse().forEach(card2 => {
    carousel.insertAdjacentHTML("afterbegin", card2.outerHTML);
});

//******************* */
carouselChildrens.slice(0, cardPerView).forEach(card2 => {
    carousel.insertAdjacentHTML("beforeend", card2.outerHTML);
});

//*************** */
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left2" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging2");
    //******* */
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}


const dragging = (e) => {
    if(!isDragging) return; //se isDragging é falso volta
    //********** */
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging2");
}

const autoPlay = () => {
    if(window.innerWidth < 800) return; //***************** */
    //************ */
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
    /*************** */
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition2");
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition2");
    } 
    /***************** */
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition2");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition2");
    }

    /****************** */
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);