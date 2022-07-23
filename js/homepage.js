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
    // Changing vid
    document.getElementById("intro").height = window.innerHeight
    
 
    // Chaning background image
    document.getElementById("myimager").height =  window.innerHeight -200;
    if (document.getElementById("myimager").height > window.innerWidth){
        document.getElementById("myimager").height = window.innerWidth;
    }
    document.getElementById("myimager").style = "margin-top:" + ( window.innerHeight -   document.getElementById("myimager").height)/2 + "px;";
    document.getElementById("mytext").height =  document.getElementById("myimager").height;

    // Calculting margin
    document.getElementById("mytext").style = "margin-top:" + ( window.innerHeight -  document.getElementById("mytext").height)/2 + "px; font-size:" + 24.0 * (  document.getElementById("myimager").height / 609.0) +"px;";
    console.log(document.getElementById("mytext").height);
   

    // Changing overlay
    if (window.innerWidth > 1000){
        document.getElementById("name").innerHTML = "Luuk van Berkel"
    } else {;
        document.getElementById("name").innerHTML = ""
    }
}





//Making animationsfunctions
function hamAnimation(x) {
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
        document.getElementById("more").innerHTML = "Scroll for more";
    } else {
        // Changing elements to dutch
        document.getElementById("lang").innerHTML = "NL";
        document.getElementById("mytext").innerHTML = "Student Technische Informatica<br>Avans Hogeschool <br><br>Op weg naar Embedded Software Engineer";
        document.getElementById("more").innerHTML = "Scroll voor meer";
    }
}