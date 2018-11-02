function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}

function login() {
    window.location.href = "templates/users/dashboard.html";
}