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

function createCarouselNavFor(elementCount){
    const container = document.createElement("div");
    while(elementCount > 0){
        const button = document.createElement("button");
        button.classList.add("carouselNavButtons");
        container.appendChild(button);
        elementCount--;
    }
    container.id = "carouselNavBar";
    container.firstElementChild.classList.add("activeNavButton");
    return container;
}

function appendCarouselElementsToContiner(carouselContainer, carouselElementsArray) {
    carouselElementsArray[0].classList.add("activeCarouselImg");
    carouselElementsArray.forEach(element => {
        carouselContainer.appendChild(element);
    });
    carouselContainer.appendChild(createCarouselNavFor(carouselElementsArray.length));
}


appendCarouselElementsToContiner(carouselContainer, imgElementsArray);