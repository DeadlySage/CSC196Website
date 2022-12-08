/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");

    //for "Encrypt it!" button
    document.getElementById("encrypt-it").addEventListener("click", shiftCipher);

    //for "Reset" button
    document.getElementById("reset").addEventListener("click", reset);

    //for "all-caps" check box
    document.getElementById("all-caps").addEventListener("change", allCaps);

    //for "Font Size" options
    document.getElementById("12ptfont-size").addEventListener("click", fontSize);
    document.getElementById("24ptfont-size").addEventListener("click", fontSize);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  
  function fontSize () {
    if(document.getElementById("12ptfont-size").checked) {
      document.getElementById("result").style.fontSize = "12pt";
    }

    else {
      document.getElementById("result").style.fontSize = "24pt";
    }
  }

  function allCaps() { 
    if (document.getElementById("all-caps").checked) {
      document.getElementById("result").innerText 
      = document.getElementById("result").innerText.toUpperCase();
    }

    else {
      document.getElementById("result").innerText 
      = document.getElementById("result").innerText.toLowerCase();
    }
  }

  function shiftCipher(txt) {
    console.log('Button clicked!');

    txt = document.getElementById("input-text").value;
    let output = "";
    txt = txt.toLowerCase();

    for(let i = 0; i < txt.length; i++){
      if (txt[i] < 'a' || txt[i] > 'z'){
        output += txt[i];
      } 
      
      else if (txt[i] == 'z') {
        output += 'a';
      } 
      
      else {
        let letter = txt.charCodeAt(i);
        let outputLetter = String.fromCharCode(letter +1);
        output += outputLetter;
      }
    }
    
    document.getElementById("result").innerText = output;
  }

  function reset() {
    //clear both the input text field and the output text field
    document.getElementById("input-text").value = "";
    document.getElementById("result").innerText = "";

    //reset options back to default
    document.getElementById("result").style.fontSize = "12pt";
    document.getElementById("all-caps").checked = false;
    document.getElementById("12ptfont-size").checked = true;
  }

})();
