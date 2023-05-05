/* Place your JavaScript in this file */
function open30YearsWar() {
    window.location.href="religiouswars.html";
}
function openZollverein() {
    window.location.href="./zollverein.html";
}
function openUnificationWars() {
    window.location.href="warsofunification.html";
}
function openWW1() {
    window.location.href="ww1.html";
}
function openWW2() {
    window.location.href="ww2.html";
}
function openHome() {
    window.location.href="index.html";
}
function openCitations() {
    window.location.href="citations.html";
}

function test() {
  window.location.href="timeline-test-page.html";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}