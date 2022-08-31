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
const sections = document.querySelectorAll(".section h2");
const sectionen = document.querySelectorAll('.section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createLink(anchorText, anchorLink){
  let aTag = document.createElement("a");
  aTag.href = anchorLink;
  aTag.innerHTML = anchorText;
  return aTag;
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.querySelectorAll('li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (anch) {
        anch.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: "smooth"})
        });
    });


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
sectionen.forEach(function(section){ 
    const navItem = document.createElement('li');
    //navItem.textContent = section.textContent;
    let linkElement = createLink(section.dataset.nav, '#' + section.dataset.nav);
    navItem.appendChild(linkElement);
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


// Set sections as active
window.addEventListener('scroll', function(event){
    let h2s = this.document.querySelectorAll('.section[data-nav] h2');
    let navList = this.document.querySelectorAll('#navbar__list a');

    h2s.forEach(h2 => {
        if (isInViewport(h2)){
            h2.style.color = "darkred";
            //const list = h2.classList;
            //list.toggle('your-active-class');
        navList.forEach(nav => {
            if (nav.textContent === h2.textContent){
                nav.classList.toggle('your-active-class');        
            } else{
                nav.classList.remove('your-active-class');
            }
            } )
           
        }
        
    })
})
     



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click



