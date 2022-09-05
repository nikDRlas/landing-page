# Landing Page Project using the DOM and JavaScript

## Table of Contents

* [Description]
* [Functions]
* [License]

## Description

Task was to create a responsive Website and connect it to a JS-file to add functionallity to it. Given was a basic HTML and some CSS to it. 
The HTML basicilly contains 4 sections of content.
In the CSS there was some background (+bg-animation) and the alignment of the items. 

The main task was to add the functionallity (see function below) and the responsivnes to the page.
Also we had to create a subscription form which sends data given  by the user to the (not existing) "server" to process this data. 
## Functions

### Dynamic Navbar
Depending on how many sections you add or remove in the HTML, the navbar will adapt autpmaticly. This is provided by a JS function which creates a list item for each section with a specific identifyer in the HTML

### Section in view
While scrollling through the page, the navbar displays on that section the user is looking, by highlighting the list item by checking the user's viewport. Additionally, the heading of the section the user is looking at, is highlighed as well by changing it's color.

### Smooth scroll
By clicking on a navbar item, the page automaticly scroll dowm in a very smooth way to the clicked section. 

### Subscription 
The subscription form takes serval user inforamtion and sends them to a imaginary server. The user can only submit, if the input equals the wanted pattern. Also there a two required input fields, which have to be filled out, to be able to submit. All this is visualized by different colors and borders. After sucessfully submitting the data, the user see's an alter, that is submit was successful

### Responsivnes
On small devices, the navbar transforms to "burger navbar" and to content is adaptet to the device of the user. By clicking on the navbar icon, a pop up window opens, with the different section nav items.

## License
See LICENSE.txt
