function initSlider() {

    let img = document.querySelector('.projects-image');
    let rightArrows = document.querySelectorAll('.right-arrow');
    let leftArrows = document.querySelectorAll('.left-arrow');
    let sliderDots = document.querySelectorAll('.slider-dot');
    let sliderDotsDiv = document.querySelector('.slider-dots');
    let projectsList = document.querySelector('.projects-list');
    let projectLinks = projectsList.querySelectorAll('.project-name-link');
    let paramValues = document.querySelectorAll('.param-value > span');

    let projectsP = document.querySelector('.projects-p');
    let sliderPhoto = document.querySelector('.slider-photo');
    let projectsTextContent = document.querySelector('.projects-text-content');

    let i = 1;

    window.addEventListener('resize', () => {
        if (window.matchMedia("(max-width: 1299px)").matches) {
            projectsP.insertAdjacentElement("afterend", sliderPhoto);
        } else {
            projectsTextContent.removeChild(sliderPhoto);
            projectsTextContent.insertAdjacentElement('afterend', sliderPhoto);
        }
    })

    function moveWithDot() {
        sliderDots.forEach((item) => {
            item.addEventListener('click', () => {
                if (i === +item.dataset.dot) {
                    return;
                } else {
                    i = +item.dataset.dot;
                    changeImage(i);
                    sliderDotsDiv.querySelector('.active-dot').classList.remove('active-dot');
                    item.classList.add('active-dot');
                    changeLink(i);
                    changeInfo(i);
                }
            })
        });
    }

    function moveWithLink() {
        projectLinks.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (i === +item.dataset.link) {
                    return;
                } else {
                    i = +item.dataset.link;
                    changeImage(i);
                    projectsList.querySelector('.active-link').classList.remove('active-link');
                    item.classList.add('active-link');
                    changeDot(i);
                    changeInfo(i);
                }
            })
        });
    }

    function moveForward() {
        i++;
        if (i > 3) {
            i = 1;
        }
        changeImage(i);
        changeDot(i);
        changeLink(i);
        changeInfo(i);
    }

    function moveBack() {
        i--;
        if (i < 1) {
            i = 3;
        }
        changeImage(i);
        changeDot(i);
        changeLink(i);
        changeInfo(i);
    }

    function changeImage(num) {
        img.classList.add('animated');
        img.addEventListener('transitionend', () => {
            img.src = `images/slider-photo${num}.jpg`;
            img.addEventListener('load', () => {
                img.classList.remove('animated');
            });
        });
    }

    function changeDot(num) {
        sliderDots.forEach((item) => {
            if (+item.dataset.dot === num) {
                sliderDotsDiv.querySelector('.active-dot').classList.remove('active-dot');
                item.classList.add('active-dot');
            }
        });
    }

    function changeLink(num) {
        projectLinks.forEach((item) => {
            if (+item.dataset.link === num) {
                projectsList.querySelector('.active-link').classList.remove('active-link');
                item.classList.add('active-link');
            }
        });
    }

    function changeInfo(num) {
        if (num === 1) {
            paramValues[0].innerHTML = 'Rostov-on-Don <br> LCD admiral';
            paramValues[1].innerHTML = '81 m2';
            paramValues[2].innerHTML = '3.5 months';
        } else if (num === 2) {
            paramValues[0].innerHTML = 'Sochi <br> Thieves';
            paramValues[1].innerHTML = '105 m2';
            paramValues[2].innerHTML = '4 months';
        } else {
            paramValues[0].innerHTML = 'Rostov-on-Don <br> Patriotic';
            paramValues[1].innerHTML = '93 m2';
            paramValues[2].innerHTML = '3 months';
        }
    }

    rightArrows.forEach((item) => {
        item.addEventListener('click', moveForward);
    });

    leftArrows.forEach((item) => {
        item.addEventListener('click', moveBack);
    });

    moveWithDot();
    moveWithLink();

}

document.addEventListener('DOMContentLoaded', initSlider);
