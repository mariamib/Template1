function function1()
{
   var x=document.getElementById("show");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    
      } else { 
        x.className = x.className.replace(" w3-show", "");
      }

}