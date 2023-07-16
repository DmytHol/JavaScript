

document.getElementById("createResume").addEventListener("click", displayResume);


function displayResume(){
    let diamond = "&#x2B25";
    // Name section
    let userName = document.getElementById("userName").value;
    
    // City section
    let userCity = document.getElementById("userCity").value + ", ";

    // State section
    let userState = document.getElementById("userState").value + " ";

    // Zip section
    let userZip = document.getElementById("userZip").value + " ";

    // Phone section
    let userPhone = diamond + " " + document.getElementById("userPhone").value;

    // Social media links
    if(document.getElementById("userSocialMedia").value != ""){
        socialMedia = " " + diamond + " " + document.getElementById("userSocialMedia").value;
    }
    else{
        socialMedia ="";
    }
    // Portfolio links
    if (document.getElementById("userPortfolio").value != ""){
        userPortfolio = diamond + " " + document.getElementById("userPortfolio").value;}
    else{
        userPortfolio = "";
    }

    // Profile section
    let profile = document.getElementById("profile").value;

    // Job 1
    let position1 = document.getElementById("position1").value;
    let job1Start = document.getElementById("job1Start").value;
    let job1End = document.getElementById("job1End").value;
    let jobDetails1 = document.getElementById("details1").value;

    // Job 2
    let position2 = document.getElementById("position2").value;
    let job2Start = document.getElementById("job2Start").value;
    let job2End = document.getElementById("job2End").value;
    let jobDetails2 = document.getElementById("details2").value;

    // Job 3
    let position3 = document.getElementById("position3").value;
    let job3Start = document.getElementById("job3Start").value;
    let job3End = document.getElementById("job3End").value;
    let jobDetails3 = document.getElementById("details3").value;

    // Education section
    let eduStart = document.getElementById("eduStart").value;
    let eduEnd = document.getElementById("eduEnd").value;
    let eduDetails = document.getElementById("details4").value;

    // Skills section
    let skill1 = document.getElementById("coding");
    let skill2 = document.getElementById("writing");
    let skill3 = document.getElementById("interpersonal");
    if (skill1.checked){
        skill1 = document.getElementById("coding").value;
    }
    else{
        skill1 = "";
    }
    if (skill2.checked){
        skill2 = document.getElementById("writing").value;
    }
    else{
        skill2 = "";
    }
    if (skill3.checked){
        skill3 = document.getElementById("interpersonal").value;
    }
    else{
        skill3 = "";
    }

    // Technical skills section
    let skill4 = document.getElementById("javaScript");
    let skill5 = document.getElementById("php");
    let skill6 = document.getElementById("html");

    if (skill4.checked){
        skill4 = document.getElementById("javaScript").value;
    }
    else{
        skill4 = "";
    }
    if (skill5.checked){
        skill5 = document.getElementById("php").value;
    }
    else{
        skill5 = "";
    }
    if (skill6.checked){
        skill6 = document.getElementById("html").value;
    }
    else{
        skill6 = "";
    }



    // Business references section
    let businessRef = document.getElementById("business").value;


    // Email validation
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("userEmail").value)){
        displayResume();}
    else {
         alert("Email not valid");
     }


    function displayResume() {
        email = diamond + " " + document.getElementById("userEmail").value;

        myText = ("<html>\n<head>\n<title>Resume</title>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"styleOnTheFly.css\"></head>\n<body>\n");
        myText += ("<div id=\"content\"><h1>" + userName + "</h1>\n");
        myText += ("<p>" + userCity + userState + userZip + userPhone + email + "</p>\n");
        myText += ("<p>" + socialMedia + userPortfolio + "</p>");
        myText += ("<h2>Profile</h2><hr>");
        myText += ("<p>" + profile + "</p>");

        myText += ("<h2>Employment History</h2><hr>");
        myText += ("<h3>" + position1 + "</h3>");
        myText += ("<h3>" + job1Start + " / " + job1End + "</h3>");
        myText += ("<p>" + jobDetails1 + "</p>");

        myText += ("<h3>" + position2 + "</h3>");
        myText += ("<h3>" + job2Start + " / " + job2End + "</h3>");
        myText += ("<p>" + jobDetails2 + "</p>");

        myText += ("<h3>" + position3 + "</h3>");
        myText += ("<h3>" + job3Start + " / " + job3End + "</h3>");
        myText += ("<p>" + jobDetails3 + "</p>");

        myText += ("<h2>Education</h2><hr>");
        myText += ("<h3>" + eduStart + " / " + eduEnd + "</h3>");
        myText += ("<p>" + eduDetails + "</p></div>");

        myText += ("<div class=\"topright\"><h3>Skills:</h3>");
        myText += ("<p>" + skill1 + "</p>\n<p>" + skill2 + "</p>\n<p>" + skill3 + "</p><br>");

        myText += ("<h3>Technical skills:</h3>");
        myText += ("<p>" + skill4 + "</p>\n<p>" + skill5 + "</p>\n<p>" + skill6 + "</p><br>");

        myText += ("<h3>References:</h3>");
        myText += ("<p>" + businessRef + "</p></div>");


        myText += ("</body>\n</html>");


        flyWindow = window.open('about:blank', 'myResume', 'width = 800, height =400, left=200, top =200');
        flyWindow.document.write(myText);
    }
   
    
}