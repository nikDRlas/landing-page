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
// Getting the UL of the navbar and safe it in variable called 'navbar'
const navbar = document.querySelector('#navbar__list');
// Getting the h2 of the different sections of the navbar and safe it in variable called 'sections'
const sections = document.querySelectorAll(".section h2");
// Getting the classes called section and safe it in variable called 'sectionen'
const sectionen = document.querySelectorAll('.section');
// Getting the div for the burger for the mobile menu  and safe it in variable called 'mobileNavIcon'
const mobileNavIcon = document.querySelector('.mobile-menu');
// Getting the UL of the navbar and safe it in variable called 'navbar'
const navMenu = document.querySelector('#navbar__list');
// Getting the a tags of the page and safe it in variable called 'navLinks'
const navLinks = document.querySelectorAll('a');
//Getting the id of the sumbit and safe it in variable called 'submit'
const submit = document.querySelector('#submit');
const reqInput = document.querySelectorAll('.req')
const anchors = document.querySelectorAll('a');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function to create a link with parameters anchorText and anchorLinks. 
function createLink(anchorText, anchorLink){
  let aTag = document.createElement('a');
  aTag.href = anchorLink;
  aTag.innerHTML = anchorText;
  return aTag;
}

// checking if an element is in the viewport by using inhouse function 'getBoundingClientRect()'
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Scroll smooth to section on link click
anchors.forEach(anchor => {
    anchor.addEventListener('click', function (anchor) {
        //prevent default "jump" from 'a' element
        anchor.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        });
    });
 

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav by generaating list items for each section of the page
sectionen.forEach(function(section){ 
    const navItem = document.createElement('li');
    // create a link element with the function above, given sectons dataset.nav as arguments
    let linkElement = createLink(section.dataset.nav, '#' + section.dataset.nav);
    // give this linkElements a class called link-element
    linkElement.classList.add('link-element');
    //append this link elment to the list item which was generated befor in this function
    navItem.appendChild(linkElement);
    //append the list item to the navbar UL itsself
    navbar.appendChild(navItem);
    
}); 

// Build mobile menu and nav
mobileNavIcon.addEventListener('click', () => {
    mobileNavIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// Remove navbar when user clicks on list item
document.querySelectorAll('a').forEach(navLink => navLink.addEventListener('click', () => {
    mobileNavIcon.classList.remove('active');
    navMenu.classList.remove('active');
}))


// Alert when submit is sucessful
submit.addEventListener('click', function(){
    
    if ( reqInput.values.length != 0){
        alert('Your subscribsion was succesful! :)');
    } else {
        alert('Please fill out the required fields!')
    }
    
})

// Add class 'your-active-class' to section when near top of viewport to add style elements via CSS to it
sectionen.forEach(function(elem){
    const list = elem.classList;
    if (isInViewport(elem)){
    list.toggle('your-active-class')
    }
});


// Set sections as active, highlight heading when in viewport, highlight navitem, depending which section is in VP
window.addEventListener('scroll', function(){
    const navList = this.document.querySelectorAll('#navbar__list a');
    sectionen.forEach(section => {
        if (isInViewport(section)){
            section.classList.add('your-active-class');
            navList.forEach(nav => {
                if (nav.textContent === section.id){
                nav.classList.add('your-active-class');        
           } else{
                nav.classList.remove('your-active-class');
        
            }
            })
        } else {
            section.classList.remove('your-active-class');
        }
})
});   






