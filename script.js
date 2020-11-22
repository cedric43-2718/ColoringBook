
window.onscroll = function() {stickyHeader()};

const header = document.getElementById('header');
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    document.getElementById("site-title").style.display = "none";
  } else {
    header.classList.remove("sticky");
    document.getElementById("site-title").style.display = "inline";
  }
}





