// medical Writing
const container = document.querySelector('.services-container');
let boxes = document.querySelectorAll('.service-box');
const gap = parseInt(window.getComputedStyle(container).gap) || 0;

function centerElement(index) {
    const boxWidth = boxes[index].offsetWidth;
    const boxOffset = boxes[index].offsetLeft;

    const elementCenter = boxOffset - container.offsetLeft - (container.clientWidth / 2) + (boxWidth / 2);

    container.scrollTo({
        left: elementCenter,
        behavior: 'smooth'
    });
}

// Scrollen nach rechts
function scrollRight() {
    const currentIndex = Math.round(container.scrollLeft / (boxes[0].offsetWidth + gap));
    const nextIndex = currentIndex + 1;

    if (nextIndex < boxes.length) {
        centerElement(nextIndex);
    } else {
        centerElement(0);
    }
}

// Scrollen nach links
function scrollLeft() {
    const currentIndex = Math.round(container.scrollLeft / (boxes[0].offsetWidth + gap));
    const prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
        centerElement(prevIndex);
    } else {
        centerElement(boxes.length - 1);
    }
}

function cloneItems() {
    const clones = Array.from(boxes).map(box => box.cloneNode(true));
    clones.forEach(clone => container.appendChild(clone));
    boxes = document.querySelectorAll('.service-box'); 
}

cloneItems(); 
cloneItems(); 

document.querySelector('.scroll-button.right').addEventListener('click', scrollRight);
document.querySelector('.scroll-button.left').addEventListener('click', scrollLeft);

// About me section
function opentab(tabname) {
    let tablinks = document.getElementsByClassName('tab-links');
    let tabcontents = document.getElementsByClassName('tab-contents');

    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    document.getElementById(tabname).classList.add('active-tab');
    event.currentTarget.classList.add('active-link');
}