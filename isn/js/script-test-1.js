// Test JavaScript
// EMACSript 7

function allumer(){document.getElementById("lampe_test").src="../img/lampe_on.gif";}
function eteindre(){ document.getElementById("lampe_test").src="../img/lampe_off.gif";}
var flag=0;
function solution(){
  document.getElementById("bouton_soluce").innerHTML="Montrer / Cacher la solution";
  if (flag==0){
    flag=1;
    document.getElementById("solution").innerHTML='<div class="code">function allumer(){<br/>document.getElementById("lampe_test").src="../img/lampe_on.gif";<br/>}</div>  ';
  }else{
    flag=0;
    document.getElementById("solution").innerHTML='Montrez moi la solution';
  }
}
