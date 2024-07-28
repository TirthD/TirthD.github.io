document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-inners');
    const items = carousel.querySelectorAll('.carousel-items');
    let currentIndex = 0;
    let scrollPosition = 0;
    const projectsWrapper = document.querySelector('.projects-wrapper');
    const projectItems = document.querySelectorAll('.project-item');
    const itemWidth = projectItems[0].offsetWidth + 20; // Include margin
    const maxScroll = (projectItems.length - 3) * itemWidth;

    document.querySelector('.carousel-control.left').addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    document.querySelector('.carousel-control.right').addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    function scrollProjects(direction) {
        if (direction === 'left') {
            scrollPosition = Math.max(scrollPosition - itemWidth, 0);
        } else {
            scrollPosition = Math.min(scrollPosition + itemWidth, maxScroll);
        }
        projectsWrapper.style.transform = `translateX(-${scrollPosition}px)`;
        updateScrollButtons();
    }

    function updateScrollButtons() {
        const leftButton = document.querySelector('.scroll-button.left');
        const rightButton = document.querySelector('.scroll-button.right');
        leftButton.disabled = scrollPosition === 0;
        rightButton.disabled = scrollPosition === maxScroll;
    }

    // Initialize scroll buttons state
    updateScrollButtons();

    // Add event listeners to scroll buttons
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');

    leftButton.addEventListener('click', function() {
        scrollProjects('left');
    });

    rightButton.addEventListener('click', function() {
        scrollProjects('right');
    });
});


function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}


