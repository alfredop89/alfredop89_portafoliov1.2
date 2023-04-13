let body = document.querySelector('body')
let header = document.querySelector('header')
let menuBar = document.getElementById('menuBar')
let dropMenu = document.getElementById('dropMenu')
let contactoLink = document.querySelectorAll('.contacto-link')
let contactoDiv = document.getElementById('contactoDiv')
let fadeOutContainers = document.querySelectorAll('.fade-out')
let lightMode = document.getElementById('lightMode')
let downloadCv = document.querySelectorAll('.download-cv')
let downloadCvContainer = document.querySelector('.download-cv-container')

// BODY CLICK

body.onclick = () => {
    dropMenu.classList.remove('open-drop-menu')
    contactoDiv.style.transform = 'translateX(1000px)'
    downloadCvContainer.classList.remove('open-download-cv-container')
}
// HEADER & MENU

menuBar.onclick = (e) => {
    e.stopPropagation()
    dropMenu.classList.toggle('open-drop-menu')
}
dropMenu.onclick = () => {
    dropMenu.classList.remove('open-drop-menu')
}
contactoLink.forEach((e) => {
    e.onclick = (ev) => {
        ev.stopPropagation()
        ev.preventDefault()
        contactoDiv.style.transform = 'translateX(0)'
        contactoDiv.stopPropagation()
    }
})
contactoDiv.onclick = () => {
    contactoDiv.style.transform = 'translateX(1000px)'
}

// SQUARE ANIMATION

function squareAnimation() {

    let div = document.createElement('div')
    div.classList.add('square-animation')
    body.appendChild(div)
}
squareAnimation()


// WINDOW SCROLLING

    window.onscroll = () => {

        fadeOutContainers.forEach((e) => {

            let windowHeight = window.innerHeight / 1.25
            let topElement = e.getBoundingClientRect().top

            topElement <= windowHeight ? e.classList.add('fade-in') : e.classList.remove('fade-in')
        })
    }

// LIGHT MODE

lightMode.onclick = () => {
    let logo = document.querySelector('.acerca-img')

    body.classList.toggle('light')
    logo.innerHTML.toggle = `<img src="./assets/front-logo">`

}

// DOWNLOAD CV

downloadCv.forEach((link) => {
    link.onclick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        downloadCvContainer.classList.add('open-download-cv-container')
    }
})