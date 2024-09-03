// medicalWriting
const container = document.querySelector('.services-container');
let boxes = document.querySelectorAll('.service-box');
const scrollAmount = boxes[0].offsetWidth + 20; // Box-Breite plus Lückenbreite

// Funktion zum Scrollen nach rechts
function scrollRight() {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // Prüfen, ob wir am Ende sind
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        setTimeout(() => {
            container.scrollLeft = 0;
        }, 300); // Kleiner Timeout, damit das Scrollen abgeschlossen wird
    }
}

// Funktion zum Scrollen nach links
function scrollLeft() {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

    // Prüfen, ob wir am Anfang sind
    if (container.scrollLeft === 0) {
        setTimeout(() => {
            container.scrollLeft = container.scrollWidth;
        }, 300); // Kleiner Timeout, damit das Scrollen abgeschlossen wird
    }
}

// Wiederholen der Inhalte durch Klonen
function cloneItems() {
    const clones = Array.from(boxes).map(box => box.cloneNode(true));
    clones.forEach(clone => container.appendChild(clone));
    boxes = document.querySelectorAll('.service-box'); // Aktualisieren der Boxen-Liste
}

cloneItems(); // Einmaliges Klonen für Wiederholung
cloneItems(); // Zweites Klonen für Sicherheit

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