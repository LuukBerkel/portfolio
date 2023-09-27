//Bootup sequence of site
rescaler();

//Setting on event listeners
window.onresize = function () {
    rescaler();
}

// Rescaling with java script of the display elements
// And yes I know there is probably a css trick but i am to lazy to learn it (-;).
function rescaler(){
    console.log("Rescale event");

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Changing vid
    document.getElementById("intro").height = windowHeight;
    document.getElementById("overmeid").height = windowHeight;
    
    // Changing background image
    document.getElementById("myimager").height =  windowHeight -200;
    if (document.getElementById("myimager").height > windowWidth){
        document.getElementById("myimager").height = windowWidth -17;
    }
    document.getElementById("myimager").style = "margin-top:" + ( windowHeight -   document.getElementById("myimager").height)/2 + "px;";

    // Calculting margin
    document.getElementById("mytext").style = "width:" +(document.getElementById("myimager").width -50) +"px; font-size:" + 35.0 * (  document.getElementById("myimager").height / 609.0) +"px;";
    document.getElementById("more").style = "font-size:" + 25.0 * (  document.getElementById("myimager").height / 609.0) +"px;";
   
    // Changing overlay
    if (windowWidth > 1000){
        document.getElementById("name").innerHTML = "Luuk van Berkel"
    } else {;
        document.getElementById("name").innerHTML = ""
    }

}

var navState = false;
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

//Making animationsfunctions
function hamAnimation(x) {
    if (!navState){
    openNav();
    navState = true;
    } else {
        closeNav();
        navState = false;
    }
    console.log("Menu event."); 
    x.classList.toggle("change");
}