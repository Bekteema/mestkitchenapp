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
    var selector = document.getElementById("usertype");
    var value = selector[selector.selectedIndex].value;
    if (value === "usr"){
        window.location.href = "templates/users/dashboard.html";
    } else if (value === "adm") {
        window.location.href = "templates/admin/dashboard.html";
    } else if (value === "kit") {
        window.location.href = "templates/kitchen/kitchen-dashboard.html";
    } else {
        window.location.href = "index.html";
    }


}