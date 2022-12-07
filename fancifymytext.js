function bigger() {
    //hello world alert at the press of "Bigger!" button
    alertHello();

    //make the text box bigger
    document.getElementById("text").style.fontSize = "24px";
}

function alertHello() {
    alert("Hello, world!");
}

function popMessage() {
    alert("Fancy")
}

function fancy() {
    var txt = document.getElementById("text");
    
    //change text color to blue
    txt.style.color = "#0000FF";
    
    //set text to bold weight
    txt.style.fontWeight = "bold";
    
    //adds an underline on the text
    txt.style.textDecoration = "underline";

    document.getElementById("radio2").checked = false;
}

function boring() {
    var txt = document.getElementById("text");
    
    //change text color to black
    txt.style.color = "#000000";
    
    //set text to normal weight 
    txt.style.fontWeight = "normal";

    //set text decoration to none
    txt.style.textDecoration = "none";
    
    document.getElementById("radio1").checked = false;
}

function moo() {
    //converts characters in text box to upper case
    var txt = document.getElementById("text");
    txt.value = txt.value.toUpperCase();
    
    //add "-Moo" after the end of every sentence
    if (txt.value.charAt(txt.value.length - 1) == ".") {
        txt.value = txt.value + "-Moo";
    }

    //replace spaces with underscores
    var str = txt.value;
    var parts = str.split(" ");
    txt.value = parts.join("_");
}


