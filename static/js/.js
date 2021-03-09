<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
crossorigin="anonymous"></script>
<script>
$(document).ready(function () {
  $('.dropdown-submenu a.test').on("click", function (e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
</script>


<script>
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
document.getElementById("headerBOXabsolute").style.height = "15%";
document.getElementById("particles-js").style.height = "11%";
document.getElementById("article").style.width = "80%";
document.getElementById("asideBreadCrump").style.width = "15%";

} else {
document.getElementById("headerBOXabsolute").style.height = "40%";
document.getElementById("particles-js").style.height = "30%";
document.getElementById("article").style.width = "75%";
document.getElementById("asideBreadCrump").style.width = "20%";
}
}
</script>