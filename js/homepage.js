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


function rescaler(){
    console.log("Rescale event." + window.innerWidth);
    // Changing vid
    document.getElementById("intro").height = window.innerHeight;

    // Changing overlay
    if (window.innerWidth > 1000){
        document.getElementById("myid").style = "width: 80%; height: " + window.innerHeight + "px; left: 10%; top: 100px; display: grid; grid-template-columns: 1fr 1fr; align-items: center; position: absolute; ";
        
        var image  = document.getElementById("myimage");
        image.height = (window.innerHeight - 200);
        image.style = "margin-left: " + 0 + "px;";
        
        var text = document.getElementById("mytext");
        text.style = "margin-left:50px; margin-right:50px; margin-top:0px;";
        text.style.fontSize = "40px";

        var more = document.getElementById("more");
        more.style = "width: 300px; height: 50px; margin-left: " + ((window.innerWidth - 300) / 2) + "px; font-size:30px;";
        document.getElementById("name").innerHTML = "Luuk van Berkel"
    } else {
        document.getElementById("myid").style = "display: inline; align-items: center; height: " + window.innerHeight + "px; position: absolute;  overflow: hidden; top: 100px;";

        var image = document.getElementById("myimage");
        image.height = (window.innerHeight /3) * 1.3;
        image.style = "margin-left: " + ((window.innerWidth - image.width) / 2)  + "px;";
   
        var text = document.getElementById("mytext");
        text.style = "margin-left: " + ((window.innerWidth - text.getBoundingClientRect().width) / 2) + "px; margin-right:0px; margin-top:10px;";
        text.style.fontSize = "23px"
        
        var more = document.getElementById("more");
        more.style = "width: 170px; height: 25px; margin-left: " + ((window.innerWidth - 170) / 2) + "px; font-size:20px;";
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