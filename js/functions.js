window.onscroll = function() {headerStick()};
// Get the header
var header = document.getElementById("myHeader");
var edit = document.getElementById("edit");
var library = document.getElementById("library");
var iedit = document.getElementById("iedit");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerStick() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    library.classList.add("library");
    edit.classList.add("edit2");
    iedit.classList.add("iedit");
  } else {
    header.classList.remove("sticky");
    library.classList.remove("library");
    edit.classList.remove("edit2");
    iedit.classList.remove("iedit");
  }
}