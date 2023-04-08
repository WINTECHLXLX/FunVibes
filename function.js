
window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.57)";
  } else {
    navbar.style.backgroundColor = "#333";
  }
});
