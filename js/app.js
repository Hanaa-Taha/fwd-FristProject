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
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav

//create section4
const navbarList = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
const section4 = document.createElement("section");
section4.id = "section4";
section4.innerHTML = section2.innerHTML;
document.getElementsByTagName("main")[0].appendChild(section4);
document.querySelector("#section4 h2").textContent = "Section 4";
// Build menu

for (let i = 1; i <= document.getElementsByTagName("section").length; i++) {
  var li = document.createElement("li");
  li.innerHTML = `<a class='menu__link' href='#section${i}'>section${i}</a>`;

  fragment.appendChild(li);
}
navbarList.appendChild(fragment);

// Scroll to anchor ID using scrollTO event
navbarList.addEventListener("click", function (e) {
  for (
    let index = 0;
    index < document.getElementsByTagName("a").length;
    index++
  ) {
    if (e.target == document.getElementsByTagName("a")[index]) {
      e.preventDefault();
      document
        .querySelector("#section" + (index + 1))
        .scrollIntoView({ behavior: "smooth" });
    }
  }
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Set sections as active

window.addEventListener("scroll", function () {
  for (let i = 0; i < document.getElementsByTagName("section").length; i++) {
    // Add class 'active' to section when near top of viewport
    if (
      document.getElementsByTagName("section")[i].getBoundingClientRect().top >=
        0 &&
      document
        .querySelector("#section" + (i + 1) + " p")
        .getBoundingClientRect().top <= window.innerHeight &&
      document.getElementsByTagName("section")[i].getBoundingClientRect()
        .left >= 0
    ) {
      document.querySelectorAll(
        '[href ="#section' + (i + 1) + '"]'
      )[0].style.cssText =
        "  background: #333;color: #fff;transition: ease 0.3s all;";
      document.getElementsByTagName("section")[i].className =
        "your-active-class";
    } else {
      document
        .getElementsByTagName("section")
        [i].classList.remove("your-active-class");
      document.querySelectorAll(
        '[href ="#section' + (i + 1) + '"]'
      )[0].style.cssText = "color:black; background:white";
    }
  }
});
