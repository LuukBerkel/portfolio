const language = navigator.language;
console.log(language);
switch (language) {
    case 'nl' :
        switchLang("nl")
    break;
    case 'en' :
        switchLang("en")
}

function buttonLang(){ 
    if (document.getElementById("lang").innerText == "EN"){
        switchLang("nl")
    } else {
        switchLang("en")
    }
}

function switchLang(language){
    console.log("Language event.");
    if (language == "nl"){
        document.getElementById("lang").innerHTML = "NL";
        document.getElementById("mytext").innerHTML = "Student Technische Informatica<br>Avans Hogeschool <br><br>Op weg naar Software Engineer";
    } else {
        document.getElementById("lang").innerHTML= "EN";
        document.getElementById("mytext").innerHTML = "Student Computer Science<br>Avans University of Applied Sciences<br><br>On my way to Software Engineer";
    }
}

