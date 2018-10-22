window.onload = function(){

      let leftside = document.getElementById("boundary1");
       leftside.addEventListener("mouseover", function(){
         this.setAttribute("class", "boundary youlose");
      });

    let allsides= document.querySelectorAll(".boundary");
             for(a = 0; a < allsides.length-1;a++){
                 allsides[a].addEventListener("mouseover",function() {
                     for(a = 0; a < allsides.length-1;a++){
                          allsides[a].setAttribute("class", "boundary youlose");
                     }
                 });
             }
    let end = document.getElementById("end").addEventListener("mouseover",comp);
    function comp(){
    if(document.getElementById("boundary1").className==="boundary youlose"){
       document.getElementById("status").textContent="You Lose!"
    }
    else{
        document.getElementById("status").textContent = "You Win!"
    }
};


}
