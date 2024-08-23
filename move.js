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
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// Setze die Höhe der About-Me-Boxen
document.addEventListener('DOMContentLoaded', function () {
    const tabContents = document.querySelectorAll('.tab-contents');
    const aboutTitle = document.querySelector('.about_title');
    const aboutmeSection = document.querySelector('.aboutme');
    let maxHeight = 0;

    // Finde die maximale Höhe unter allen Tab-Inhalten
    tabContents.forEach(content => {
        const height = content.scrollHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Berechnung der Höhe des gesamten Abschnitts inkl. zusätzlicher Margen oder Paddings
    const titleHeight = aboutTitle ? aboutTitle.scrollHeight : 0;
    const sectionPaddingTop = parseFloat(getComputedStyle(aboutmeSection).paddingTop);
    const sectionPaddingBottom = parseFloat(getComputedStyle(aboutmeSection).paddingBottom);
    
    // 40% der Bildschirmhöhe hinzufügen
    const additionalBuffer = 0.4 * window.innerHeight;

    // Setze die Höhe für den Container
    aboutmeSection.style.height = (maxHeight + titleHeight + sectionPaddingTop + sectionPaddingBottom + additionalBuffer) + 'px';
});

// Observer für dynamische Änderungen
const observer = new MutationObserver(() => {
    const tabContents = document.querySelectorAll('.tab-contents');
    const aboutTitle = document.querySelector('.about_title');
    const aboutmeSection = document.querySelector('.aboutme');
    let maxHeight = 0;

    tabContents.forEach(content => {
        const height = content.scrollHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    const titleHeight = aboutTitle ? aboutTitle.scrollHeight : 0;
    const sectionPaddingTop = parseFloat(getComputedStyle(aboutmeSection).paddingTop);
    const sectionPaddingBottom = parseFloat(getComputedStyle(aboutmeSection).paddingBottom);
    const additionalBuffer = 0.04 * window.innerHeight; // 4% der Bildschirmhöhe

    aboutmeSection.style.height = (maxHeight + titleHeight + sectionPaddingTop + sectionPaddingBottom + additionalBuffer) + 'px';
});

document.querySelectorAll('.tab-contents').forEach(tabContent => {
    observer.observe(tabContent, { childList: true, subtree: true });
});
