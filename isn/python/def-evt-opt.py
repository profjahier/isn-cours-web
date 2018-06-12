def test(*arg):
    if arg:
        print("voici les args d'appel :",arg)
    else:
        print('fonction appelée sans argument')

print('appel n°1 avec des arg')
test(12, 'toto', [1, 'a'])

print('appel n°2 sans arg')
test()

from tkinter import *


def alerte(*event):
    """ Toute l'astuce réside dans le paramètre optionnel *event """
    if event:
        message.set("Vous venez d'appuyer sur la touche Entrée")
    else:
        message.set("Vous venez de cliquer sur le bouton Alerte")
        
fenetre = Tk()
fenetre.title("Démo appel de fonction par event ou bouton + command")

message = StringVar()
message.set("Appuyez sur la touche Entrée ou Cliquez sur le bouton Alerte")
label = Label(fenetre, width='80', textvariable=message)
label.pack()

Button(fenetre, text="Alerte", command=alerte).pack()

fenetre.bind_all("<Return>", alerte)

Button(fenetre, text="Quitter", command=fenetre.destroy).pack()

fenetre.mainloop()
