const carouselImagesLocation = ['/images/carousel-images/first.jpg',
    '/images/carousel-images/second.jpg',
    '/images/carousel-images/third.jpg',
    '/images/carousel-images/fourth.jpg',
    '/images/carousel-images/fifth.jpg'];

const carouselContainer = document.getElementById("carousel");

const imgElementsArray = Array.from(carouselImagesLocation.map(location => {
    const imgContainer = document.createElement("img");
    imgContainer.src = location;
    imgContainer.classList.add("carouselImages");
    return imgContainer;
}));

function createCarouselNavFor(elementCount) {
    const container = document.createElement("div");
    while (elementCount > 0) {
        const button = document.createElement("button");
        button.classList.add("carouselNavButtons");
        container.appendChild(button);
        elementCount--;
    }
    container.id = "carouselNavBar";
    container.firstElementChild.classList.add("activeCarouselNavButton");
    return container;
}

function appendCarouselElementsToContiner(carouselContainer, carouselElementsArray) {
    carouselElementsArray[0].classList.add("activeCarouselImage");
    carouselElementsArray.forEach(element => {
        carouselContainer.appendChild(element);
    });
    carouselContainer.appendChild(createCarouselNavFor(carouselElementsArray.length));
}


appendCarouselElementsToContiner(carouselContainer, imgElementsArray);


// ******************************** ADDING FUNCTIONALITY TO CAROUSEL *************************************** //

const carouselImages = document.querySelectorAll('.carouselImages');
const carouselNavButtons = document.querySelectorAll('.carouselNavButtons');
let currentIndex = 0;


function resetOtherButtonsAndImagesInCarousel(){
    carouselImages.forEach(image =>{
        image.classList.remove("activeCarouselImage");
    })
    carouselNavButtons.forEach(button =>{
        button.classList.remove('activeCarouselNavButton');
    })
};


carouselNavButtons.forEach((button, index) => {
    button.addEventListener('click', ()=>{

        resetOtherButtonsAndImagesInCarousel();

        carouselImages[index].classList.add("activeCarouselImage");
        button.classList.add("activeCarouselNavButton");
        currentIndex = index;
    })
})


// below code automates the slideshow to happen continuously


function goToIndex(index){
    resetOtherButtonsAndImagesInCarousel();
    carouselImages[index].classList.add("activeCarouselImage");
    carouselNavButtons[index].classList.add("activeCarouselNavButton");
}

function slideshowCarousel(){
    currentIndex = (currentIndex+1) % carouselImages.length;
    goToIndex(currentIndex);
}

setInterval(slideshowCarousel, 4000);