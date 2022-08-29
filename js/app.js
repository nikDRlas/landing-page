/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll(".landing__container h2");
const sectionen = document.querySelectorAll('.section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
sections.forEach(function(section){ 
    const navItem = document.createElement('li');
    navItem.appendChild(section);
    navbar.appendChild(navItem);
}); 


// Add class 'active' to section when near top of viewport
sectionen.forEach(function(elem){
    const list = elem.classList;
    if (isInViewport(elem)){
    list.toggle('your-active-class')
    }; 
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


