// $(document).ready(function(){

//     $(".navbar").hide(); //Hide the navigation bar first
  
//       $(window).scroll(function () {  //Listen for the window's scroll event
//           if (isScrolledAfterElement("#about")) { //if it has scrolled beyond the #content elment
//               $('.navbar').fadeIn();  //Show the navigation bar
//           } else {
//               $('.navbar').fadeOut(); //Else hide it
//           }
//       })});

// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navId__home").style.top = "0";
//   } else {
//     document.getElementById("navId__home").style.top = "-60px";
//   }
//   prevScrollpos = currentScrollPos;
// }


// // When the user scrolls down 100vh (innerheight) from the top of the document, slide down the navbar
// // When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > innerHeight || document.documentElement.scrollTop > innerHeight) {
//     document.getElementById("navId_sections").style.top = "0";
//   } else {
//     document.getElementById("navId_sections").style.top = "-60px";

//   }
// }

window.addEventListener('scroll', scrollFunctionHideNavBar);
window.addEventListener('scroll', scrollFunctionSlideDownNavBar);

var prevScrollpos = window.scrollY;

function scrollFunctionHideNavBar() {

    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navId__home").style.top = "0";
    } else  {
        document.getElementById("navId__home").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;

}

function scrollFunctionSlideDownNavBar() {

    if (document.body.scrollTop > innerHeight || document.documentElement.scrollTop > innerHeight) {
    document.getElementById("navId_sections").style.top = "0";
    } else if (document.body.scrollTop < innerHeight || document.documentElement.scrollTop < innerHeight) {
    document.getElementById("navId_sections").style.top = "-70px";
    }

}



