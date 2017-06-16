#!/usr/bin/python3
## ce programme doit repérer l'en-te d'un fichier html
## et le remplacer par autre chose
##

import os
import shutil
import glob
import re
##import os
##
##os.chdir("/home/ronan/python-exos/html") # change le repertoire courant de travail
##rep_courant=os.getcwd() #récupère le repertoire courant de travail
##
### récupère la liste des fichiers html 
##import glob
##liste_fichiers_html=glob.glob("*.html")
##
### crée un rédossier pour contenir les fichiers modifiés
### si le dossier existe déjà, on lui incrémente son numéro à la fin
##dossier_modif="fichiers-modif-0"
##while os.path.exists(dossier_modif):
##    dossier_modif=dossier_modif[:-1]+str(int(dossier_modif[-1])+1)
##os.mkdir(dossier_modif)
##
### fait des copies des fichiers originaux pour modifier les copies et pas les originaux (sait-on jamais !)
##import shutil
##for fichier in liste_fichiers_html:
##    shutil.copyfile(fichier, dossier_modif+"/copie-"+fichier)
##
##os.chdir("/home/ronan/python-exos/html/"+dossier_modif) # change le repertoire courant de travail vers le répertoire des copies
### récupère la liste des fichiers du répertoire courant (contient seulement les copies des fichiers html à modifier)
##liste_fichiers=os.listdir()
##
### parcourt tous les fichiers html et repère leur en-tête
### puis modifie cet en-tête par <head>MODIF</head> (avec des sauts de lignes \n avant et après)
##import re # pour les expressions régulières      
##for fichier in liste_fichiers:
##    f=open(fichier,"r")
##    f_modif=open(fichier[6:],"w") # fichier[6:] : enlève le "copie-" au début du nom du fichier
##    origine=f.read()
##    modif=re.sub(r"<head>[\s\S]*</head>",r"\n\n<head>MODIF</head>\n\n",origine)
#### [\s\S]* : identifie tous les espaces blancs \s (du type tabulation ou saut de ligne) et tous ceux qui ne sont pas des espaces blancs \S autant de fois possible (de 0 à beaucoup !)
##    f_modif.write(modif)
##    f.close()
##    f_modif.close()
##    os.remove(fichier) # supprime le fichier de copie après sa modification

##os.chdir("/home/ronan/python-exos/test-modif-fichier")
rep_travail=os.getcwd()
print("Je vais modifier les fichiers présent dans le répertoire :\n",rep_travail)

# Définition du nom du dossier contenant les fichier modifiés
nom_valide=True
while nom_valide:
    dossier_modif=input("Entrez le nom du dossier contenant les fichiers modifiés :\n")
    if os.path.exists(dossier_modif):
        print("Désolé, ce dossier existe déjà, veuillez choisir un autre nom")
    else:
        nom_valide=False
        os.mkdir(dossier_modif)

# récupère la liste des fichiers html qu'on veut modifier        
liste_fichiers_html=glob.glob("*.html")

# création des copies des fichiers originaux pour modifier les copies et pas les originaux (sait-on jamais !)
for fichier in liste_fichiers_html:
    shutil.copyfile(fichier, dossier_modif+"/copie-"+fichier)

# change le repertoire courant de travail vers le répertoire des copies    
os.chdir(dossier_modif)
# récupère la liste des fichiers du répertoire courant (contient seulement les copies des fichiers html à modifier)
liste_fichiers=os.listdir()

regex=input("Entrez l'expression régulière de ce que vous souhaitez modifier \n (par exemple pour rechercher l'en-tête : <head>[\s\S]*</head>)\n")
modif=input("Entrez la modification que vous souhaitez \n (par exemple pour modifier l'en-tête : <head>\\n <title>nouveau titre</title>\\n <meta charset='utf-8'/>\\n</head>)\n ")

for fichier in liste_fichiers:
    f=open(fichier,"r")
    f_modif=open(fichier[6:],"w") # fichier[6:] : enlève le "copie-" au début du nom du fichier
    origine=f.read()
    modification=re.sub(regex,modif,origine)
    f_modif.write(modification)
    f.close()
    f_modif.close()
    os.remove(fichier) # supprime le fichier de copie après sa modification
