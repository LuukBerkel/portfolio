//Bootup sequence of site
init();
function init(){

    // Booting twice else sometimes it will not center all correctly...
    // IDK  why but yeah.........
    rescaler();
    rescaler();
}

//Setting on event listeners
window.onresize = function () {
    rescaler();
}

// Rescaling with java script of the display elements
// And yes I know there is probably a css trick but i am to lazy to learn it (-;).
function rescaler(){
    console.log("Rescale event." + window.innerWidth);

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Changing vid
    document.getElementById("intro").height = windowHeight;
    
    // Chaning background image
    document.getElementById("myimager").height =  windowHeight -200;
    if (document.getElementById("myimager").height > windowWidth){
        document.getElementById("myimager").height = windowWidth -17;
        console.log("Rescale event horz." + windowWidth) -17;
    }
    document.getElementById("myimager").style = "margin-top:" + ( windowHeight -   document.getElementById("myimager").height)/2 + "px;";

    // Calculting margin
    document.getElementById("mytext").style = "width:" +(document.getElementById("myimager").width -50) +"px; font-size:" + 35.0 * (  document.getElementById("myimager").height / 609.0) +"px;";
    document.getElementById("more").style = "font-size:" + 25.0 * (  document.getElementById("myimager").height / 609.0) +"px;";
    console.log(document.getElementById("mytext").height);
   

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

//TODO fix and make cleaner
function langLogic(x){
    console.log("Menu event."); 
    if (document.getElementById("lang").innerText == "NL"){
        // Changing elements to english
        document.getElementById("lang").innerHTML= "EN";
        document.getElementById("mytext").innerHTML = "Student Technical Informatics<br>Avans University of Applied Sciences <br><br>On my way to Embedded Software Engineer";
    } else {
        // Changing elements to dutch
        document.getElementById("lang").innerHTML = "NL";
        document.getElementById("mytext").innerHTML = "Student Technische Informatica<br>Avans Hogeschool <br><br>Op weg naar Embedded Software Engineer";
    }
}