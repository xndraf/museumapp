function main() {
  var geheel = document.body;
  var navKnop = document.getElementsByClassName("navknop")[0];
  var navClose = document.getElementsByClassName("navclose")[0];
  var navColor = document.getElementsByClassName("navcolor")[0];
  var navigatie = document.getElementsByTagName("nav")[0];
            navKnop.onclick = function(){
              if(navigatie.style.left === '0vw'){
                navigatie.style.left = '100vw';
                navigatie.style.transition= "ease-in 0.5s";
                navKnop.style.transition= "ease-in 0.5s";
                navKnop.style.width="50px";
                navKnop.style.height="50px";
                navClose.style.top="100px";
                navClose.style.left="-250px";
                navColor.innerHTML= "&#9677;"
              }else{
                navigatie.style.left = '0vw'
                navigatie.style.transition= "ease-out 0.5s";
                navKnop.style.transition= "ease-out 0.5s"
                navKnop.style.width="100%";
                navKnop.style.height="100%";
                navClose.style.top="450px";
                navClose.style.left="10%";
                navColor.innerHTML= "color"
              }
          }

}
window.onload = function() {
       main();
}
