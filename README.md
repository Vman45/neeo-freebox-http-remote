# NEEO Freebox Player HTTP driver

Ce driver permet de commander une Freebox Player via des requêtes HTTP.

## Prérequis

* Avoir Node.js v6 installé au minimum, voir http://nodejs.org

## Pour commencer

* Lancer la commande `npm install` pour installer les dépendances.

## Configuration
Ce driver nécessite différentes informations pour fonctionner, elles sont à renseigner dans le fichier config.js. 

* Tout d'abotrd il vous faut le code télécommande pour commander le Player. Celui ci peut être trouvé dans le menu "Règlages" du Player, puis "Système", "Informations Freebox Player et Server". Dans le premier onglet (sélectionné par défaut) en haut à droite sous la rubrique "Télécommande" vous trouverez le code sous l'appellation "Code télécommande réseau".

Ce code correspond à la variable REMOTE_API_CODE.

* Il faut également renseigner l'adresse IP du Freebox Player que vous pouvez trouver dans l'interface FreeboxOS (http://http://mafreebox.free.fr/) rubrique "Périphériques réseau" puis en cliquant sur "Freebox Player". L'adresse IP se trouve dans le 3e onglet "Connectivité" et est de la forme "192.168.x.xx".

L'adresse correspond à la variable FREEBOX_PLAYER_IP 

* Si vous souhaitez controler un 2e boitier Player, il faut modifier la variable PLAYER_ID par hd2.

## Shortcuts
En plus des boutons classiques de télécommande, d'autres raccourcis sont disponibles: 
* Un bouton Home pour revenir au menu principal (bouton FREE sur la télécommande)
* Un bouton Play/Pause 
* Un bouton Infos flux pour afficher les informations techniques du flux en cours

