// medicalWriting
const container = document.querySelector('.services-container');
let boxes = document.querySelectorAll('.service-box');

function getScrollAmount() {
    const boxWidth = boxes[0].offsetWidth;
    const gap = parseInt(window.getComputedStyle(container).gap, 10) || 0;
    return boxWidth + gap;
}

function scrollRight() {
    const scrollAmount = getScrollAmount();
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        setTimeout(() => {
            container.scrollLeft = 0;
        }, 300); 
    }
}

function scrollLeft() {
    const scrollAmount = getScrollAmount();
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

    if (container.scrollLeft === 0) {
        setTimeout(() => {
            container.scrollLeft = container.scrollWidth;
        }, 300); 
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