# NEEO Freebox Player HTTP driver

Ce driver permet de commander une Freebox Player via des requêtes HTTP. Elle ne permet pas de savoir l'état (ON/OFF) de la Freebox et donc cette dernière est considérée comme un 
"stupid device" dans vos recipe.

## Prérequis

* Avoir Node.js v6 installé au minimum, voir http://nodejs.org

## Pour commencer

* Lancer la commande `npm install` pour installer les dépendances.

## Configuration
Ce driver nécessite le code télécommande pour commander le Player. Celui ci peut être trouvé dans le menu "Règlages" du Player, puis "Système", "Informations Freebox Player et Server". Dans le premier onglet (sélectionné par défaut) en haut à droite sous la rubrique "Télécommande" vous trouverez le code sous l'appellation "Code télécommande réseau".

Ce code est à renseigner soit dans une variable d'environnement REMOTE_CODE soit directement dans le fichier controller.js à la première ligne.

## Shortcuts
En plus des boutons classiques de télécommande, d'autres raccourcis sont disponibles: 
* Un bouton Home pour revenir au menu principal (bouton FREE sur la télécommande)
* Un bouton Play/Pause 
* Un bouton Infos flux pour afficher les informations techniques du flux en cours

