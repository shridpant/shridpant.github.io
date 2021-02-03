// For testing the preloader
function loadedContent(){
  myVar = setTimeout(showPage, 3000);
}

function showPage(){
  // Hide the preloader
  document.querySelector(".preloader-wrap").style.visibility = "hidden";
  // Show the main contents
  document.querySelector("#mainPage").style.visibility = "visible";
  document.querySelector("#afterHome").style.display = "block";
  document.querySelector("#mainNavbar").style.display = "block";
}