// Test JavaScript
// EMACSript 7

function allumer(){document.getElementById("lampe_test").src="../img/lampe_on.gif";}
function eteindre(){ document.getElementById("lampe_test").src="../img/lampe_off.gif";}
var flag = 0;
function solution(){
  document.getElementById("bouton_soluce").innerHTML="Montrer / Cacher la solution";
  document.getElementById("solution").innerHTML="<strong>Remontrez-moi la solution</strong>";
  if (flag==0){
    flag=1;
    document.getElementById("solution").style.display="none";
    document.getElementById("solution2").style.display="block";
  }else{
    flag=0;
    document.getElementById("solution").style.display="block";
    document.getElementById("solution2").style.display="none";
  }
}
