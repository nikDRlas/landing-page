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
const sections = document.querySelectorAll(".section[data-nav] h2");
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
    navItem.textContent = section.textContent;;
    navbar.appendChild(navItem);
}); 

submit = document.querySelector('#submit')
submit.addEventListener('click', function(){
    alert('Your subscribsion was succesful! :)');
})

// Add class 'active' to section when near top of viewport
// VLLT noch while scrolling oder so adden damit immer akutalisiert
sectionen.forEach(function(elem){
    const list = elem.classList;
    if (isInViewport(elem)){
    list.toggle('your-active-class')
    }; 
});

window.addEventListener('scroll', function(event){
    let h2s = this.document.querySelectorAll('.section[data-nav] h2');
    let navList = this.document.querySelectorAll('#navbar__list li');

    h2s.forEach(h2 => {
        if (isInViewport(h2)){
           h2.style.color = 'red';
        }
        else{
            h2.style.color = 'black';
        }
    })
})
     
/*window.addEventListener('scroll', function(event){
// add event on scroll
  let findMe = document.querySelectorAll('h2');
  let li = document.querySelectorAll('li');
// on scroll fetch H2 and li elements, on scroll in order to get new dynamically added with button
  findMe.forEach(element => {
//for each h2
    if (isInViewport(element)) 
//if in Viewport
        li.forEach(li => {
          li.style.textDecoration = 'underline';
        })
//set all li styles to none in order to remove before added
        li.forEach(li => {
//for each li
          if (li.innerHTML.trim() === element.innerHTML.trim()) {
//if li text is same as curent element in viport text 
            li.style.color = 'red';
//add style
          }})
        })
    }; */

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


