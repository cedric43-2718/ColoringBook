
window.onscroll = function() {myFunction()};

const header = document.getElementById('header');
var sticky = header.offsetTop;

console.log(sticky);

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





