import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import lozad from 'lozad'


const observer = lozad();
observer.observe();

const creators1 = new Swiper('.js-creators-1', {
    spaceBetween: 20,
    loop: true,
    slidesPerView: 4,
    pagination: {
        el: '.js-creators-1 .swiper-pagination',
        clickable: true,
    },
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }

});
const creators2 = new Swiper('.js-creators-2', {
    spaceBetween: 20,
    loop: true,
    slidesPerView: 4,
    pagination: {
        el: '.js-creators-2 .swiper-pagination',
        clickable: true,
    },
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});

window.addEventListener('load', function() {


    let navButton = document.querySelector('.nav-button');
    let navSideBar = document.querySelector('.header__nav-holder');
    let backDrop = document.querySelector('.backdrop');

    navButton.addEventListener('click', function (event) {
        this.classList.toggle('active');
        navSideBar.classList.toggle('active');
        backDrop.classList.toggle('active');

    }, false);

    backDrop.addEventListener('click', function (event) {
        navButton.classList.toggle('active');
        navSideBar.classList.toggle('active');
        this.classList.toggle('active');
    }, false);


    window.addEventListener('scroll', function(){
        let header = document.querySelector('.header');
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    let myTabs = document.querySelectorAll('.js-creators-nav-tabs a');
    function myTabClicks(tabClickEvent) {
        for (let i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove('btn--main');
            myTabs[i].classList.add('btn--outline')
        }
        let clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add('btn--main');
        clickedTab.classList.remove('btn--outline');
        tabClickEvent.preventDefault();
        let myContentPanes = document.querySelectorAll('.creators__tab-pane');
        for (let i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove('active');
        }
        let anchorReference = tabClickEvent.target;
        let activePaneId = anchorReference.getAttribute('href');
        let activePane = document.querySelector(activePaneId);
        activePane.classList.add('active');
    }
    for (let i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener('click', myTabClicks)
    }
});
