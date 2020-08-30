function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

 window.onload = function(){
     wait(1500);
    //hide the preloader
    document.querySelector(".preloader-wrap").style.display = "none";
}