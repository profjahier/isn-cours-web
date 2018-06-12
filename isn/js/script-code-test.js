/* ATTENTION !!!
Pour le code HTML, si la balise ouvrante est span,
il faut la terminer avec la balise fermante span_ (underscore est une marque de repère pour mon code JS)
*/

function modifCodesHtml(){
  var codes = document.getElementsByClassName('code-html');
  var i = 0;
  while (i < codes.length){
    modifCodeHtml(codes[i]);
    i++;
  }
}

function modifCodeHtml(code){
  var texte = code.innerHTML;
  var lignes = texte.split(/\r\n|\r|\n/);
  code.innerHTML = '';
  lignes.forEach(function(ligne, index, lignes){
    if (index < lignes.length-1){
      var ligneModifiee = modifLigneHtml(ligne);
      if (index < 9){
        code.innerHTML +=  ' '+(index+1).toString()+'| '+ligneModifiee+'\n';
      } else{
        code.innerHTML +=  (index+1).toString()+'| '+ligneModifiee+'\n';
      }
    }
  });
}

function modifLigneHtml(ligne){
  var regAttr = /(\w*?)=(".*?")/g;
  var regBal = /&lt;(?!\!)(.{1,}?)(\s|&gt;|\/)/g;
  var regCom2deb = /(&lt;!--.*)/g;
  var regCom2milieu = /\/\.\.\.(.*)/g;
  var regCom2fin = /(.*--&gt;)/g;
  var reponse;
  var ligneModifiee = ligne;

  while ((reponse = regAttr.exec(ligne)) !== null) {
      var attribut = reponse[1];
      var valeur = reponse[2];
      ligneModifiee = ligneModifiee.replace(attribut, '<span class="attribut">'+attribut+'</span>');
      ligneModifiee = ligneModifiee.replace(valeur, '<span class="valeur">'+valeur+'</span>');
  }
  // test à effectuer en dernier pour le cas où un attribut vaut 'class'
  while ((reponse = regBal.exec(ligne)) !== null) {
      var balise = reponse[1];
      ligneModifiee = ligneModifiee.replace(balise, '<span class="balise">'+balise+'</span>');
      // au cas où... la balise était span [fermée par span_]
      if (balise === 'span'){
        ligneModifiee = ligneModifiee.replace('&lt;/span_&gt;', '&lt;<span class="balise">/span</span>&gt;');
      }

    }
  while ((reponse = regCom2deb.exec(ligne)) !== null) {
    var commentaire = reponse[1];
    ligneModifiee = ligneModifiee.replace(commentaire, '<span class="commentaire">'+commentaire+'</span>');
  }
  while ((reponse = regCom2fin.exec(ligne)) !== null) {
    var commentaire = reponse[1];
    ligneModifiee = ligneModifiee.replace(commentaire, '<span class="commentaire">'+commentaire+'</span>');
  }
  while ((reponse = regCom2milieu.exec(ligne)) !== null) {
    var commentaire = reponse[1];
    var a_supprimer = reponse[0];
    ligneModifiee = ligneModifiee.replace(a_supprimer, '<span class="commentaire">'+commentaire+'</span>');
  }
  return ligneModifiee;
}


function modifCodesCss(){
  var codes = document.getElementsByClassName('code-css');
  var i = 0;
  while (i < codes.length){
    modifCodeCss(codes[i]);
    i++;
  }
}

function modifCodeCss(code){
  var texte = code.innerHTML;
  var lignes = texte.split(/\r\n|\r|\n/);
  code.innerHTML = '';
  lignes.forEach(function(ligne, index, lignes){
    if (index < lignes.length-1){
      var ligneModifiee = modifLigneCss(ligne);
      if (index < 9){
        code.innerHTML +=  ' '+(index+1).toString()+'| '+ligneModifiee+'\n';
      } else{
        code.innerHTML +=  (index+1).toString()+'| '+ligneModifiee+'\n';
      }
    }
  });
}

function modifLigneCss(ligne){
  var regSelec = /(.*?){/g;
  var regId = /(#.*?){/g;
  var regClass = /(\..*?){/g;
  var regProp = /:(.*?);/g;
  var regCom1 = /(\/\/.*)/g;
  var regCom2deb = /(\/\*.*)/g;
  var regCom2milieu = /\/\.\.\.(.*)/g;
  var regCom2fin = /(.*\*\/)/g;
  var reponse;
  var ligneModifiee = ligne;
  while ((reponse = regSelec.exec(ligne)) !== null) {
      var selecteur = reponse[1];
      ligneModifiee = ligneModifiee.replace(selecteur, '<span class="selecteur">'+selecteur+'</span>');
  }
  while ((reponse = regId.exec(ligne)) !== null) {
      var identifiant = reponse[1];
      ligneModifiee = ligneModifiee.replace(identifiant, '<span class="identifiant">'+identifiant+'</span>');
  }
  while ((reponse = regClass.exec(ligne)) !== null) {
      var classe = reponse[1];
      ligneModifiee = ligneModifiee.replace(classe, '<span class="classe">'+classe+'</span>');
  }
  while ((reponse = regProp.exec(ligne)) !== null) {
      var propriete = reponse[1];
      ligneModifiee = ligneModifiee.replace(propriete, '<span class="propriete">'+propriete+'</span>');
  }
  while ((reponse = regCom1.exec(ligne)) !== null) {
      var commentaire = reponse[1];
      ligneModifiee = ligneModifiee.replace(commentaire, '<span class="commentaire">'+commentaire+'</span>');
  }
  while ((reponse = regCom2deb.exec(ligne)) !== null) {
      var commentaire = reponse[1];
      ligneModifiee = ligneModifiee.replace(commentaire, '<span class="commentaire">'+commentaire+'</span>');
  }
  while ((reponse = regCom2fin.exec(ligne)) !== null) {
      var commentaire = reponse[1];
      ligneModifiee = ligneModifiee.replace(commentaire, '<span class="commentaire">'+commentaire+'</span>');
  }
  while ((reponse = regCom2milieu.exec(ligne)) !== null) {
      var commentaire = reponse[1];
      var a_supprimer = reponse[0];
      ligneModifiee = ligneModifiee.replace(a_supprimer, '<span class="commentaire">'+commentaire+'</span>');
  }
  return ligneModifiee;
}
