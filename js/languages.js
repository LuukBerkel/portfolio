const language = navigator.language;
console.log(language);
switch (language) {
    case 'nl' :
        switchLang("nl")
    break;
    case 'en' :
        switchLang("en")
        break;
    default:
        switchLang("nl")
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
        document.getElementById("myprofile").innerHTML = "Profiel";
        document.getElementById("mydesc").innerHTML = "Als student Technische Informatica aan Avans in Breda specialiseer ik me voornamelijk in graphics, embedded systems, backend development en robotic engineering. "
        + "Deze opleiding biedt een grondige verkenning van deze vakgebieden, waarbij ik leer om complexe grafische systemen te ontwerpen, efficiënte embedded systemen te ontwikkelen, robuuste backend-oplossingen te bouwen en innovatieve robotica-toepassingen te implementeren. "
        + "Door middel van praktische projecten en intensieve samenwerkingen binnen diverse ontwikkelomgevingen, verwerf ik zowel theoretische kennis als waardevolle praktijkervaring. "
        + "Dit stelt mij in staat om goed voorbereid te zijn op een dynamische en veelzijdige carrière in de technologische industrie, met een focus op cutting-edge technologieën zoals robotica.";
        document.getElementById("myexperience").innerHTML = "Ervaring";
        document.getElementById("mycv").innerHTML = "Curriculum Vitae";
        document.getElementById("mypdf").src = "media/cv-dutch.pdf" ;

        document.getElementById("navhome").innerHTML = "Startpagina";
        document.getElementById("navprofile").innerHTML = "Profiel";
        document.getElementById("navexperience").innerHTML = "Ervaring";
        document.getElementById("navcv").innerHTML = "Curriculum Vitae";
    } else {
        document.getElementById("lang").innerHTML= "EN";
        document.getElementById("mytext").innerHTML = "Student Computer Science<br>Avans University of Applied Sciences<br><br>On my way to Software Engineer";
        document.getElementById("myprofile").innerHTML = "Profile";
        document.getElementById("mydesc").innerHTML = "As a student of Technical Informatics at Avans in Breda, I specialize primarily in graphics, embedded systems, backend development, and robotic engineering. "
        + "This program offers a thorough exploration of these fields, where I learn to design complex graphical systems, develop efficient embedded systems, build robust backend solutions, and implement innovative robotics applications. " 
        + "Through practical projects and intensive collaborations within diverse development environments, I acquire both theoretical knowledge and valuable practical experience. " 
        + "This prepares me to be well-equipped for a dynamic and versatile career in the technology industry, with a focus on cutting-edge technologies such as robotics.";
        document.getElementById("myexperience").innerHTML = "Experience";
        document.getElementById("mycv").innerHTML = "Curriculum Vitae";
        document.getElementById("mypdf").src = "media/cv-english.pdf" ;


        
        document.getElementById("navhome").innerHTML = "Home";
        document.getElementById("navprofile").innerHTML = "Profile";
        document.getElementById("navexperience").innerHTML = "Experience";
        document.getElementById("navcv").innerHTML = "Curriculum Vitae";
  
    }
}

