# Pack Utilitaire By Rabah

Une application web tout-en-un regroupant cinq outils pratiques : une calculatrice scientifique, un agenda avec calendrier, une boussole géolocalisée, un chronomètre avec historique, et une carte interactive. Conçue pour être intuitive, responsive, et dotée d'un mode sombre.

## Table des matières
- [Fonctionnalités](#fonctionnalités)
- [Captures d'écran](#captures-décran)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Contribution](#contribution)
- [Licence](#licence)
- [Contact](#contact)

## Fonctionnalités

- **calculatrice-scientifique** :
  - Calculs de base et fonctions avancées (sin, cos, tan, ln, etc.).
  - Support des degrés/radians, mémoire (M+, M-, MR, MC), et historique des calculs.
  - Personnalisation de la couleur de fond.

- **Agenda** :
  - Ajout, suppression, et affichage d'événements (réunions ou tâches) avec date, heure, couleur, et localisation (latitude/longitude).
  - Calendrier interactif (FullCalendar) avec vues mensuelle, hebdomadaire, et quotidienne.
  - Notifications 5 minutes avant chaque événement.
  - Persistance des événements via `localStorage`.

- **Boussole** :
  - Orientation calculée via géolocalisation (GPS) ou magnétomètre (si disponible).
  - Messages diagnostics pour la précision GPS et instructions pour une utilisation optimale.
  - Nécessite un déplacement de 5 mètres minimum pour calculer l'orientation sans magnétomètre.

- **Chronomètre** :
  - Démarrage, arrêt, réinitialisation, et enregistrement des tours (laps).
  - Historique des sessions sauvegardé dans `localStorage`.
  - Affichage précis au millième de seconde.

- **Carte** :
  - Carte interactive (Leaflet) centrée sur la position de l'utilisateur via géolocalisation.
  - Marqueurs pour les événements de l'agenda (coordonnées réelles ou fictives si non spécifiées).
  - Gestion des erreurs de géolocalisation avec messages clairs.

- **Fonctionnalités transversales** :
  - Interface à onglets pour naviguer entre les outils.
  - Mode sombre avec persistance via `localStorage`.
  - Design responsive adapté aux mobiles et ordinateurs.

## Captures d'écran

| Calculatrice | Agenda | Boussole | Chronomètre | Carte |
|--------------|--------|----------|-------------|-------|
| ![Calculatrice](screenshots/calculatrice.png) | ![Agenda](screenshots/agenda.png) | ![Boussole](screenshots/boussole.png) | ![Chronomètre](screenshots/chronometre.png) | ![Carte](screenshots/carte.png) |

*Note : Les captures d'écran seront ajoutées prochainement. Créez un dossier `screenshots/` et mettez à jour les chemins après avoir pris les captures.*

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge).
- Une connexion Internet pour charger les bibliothèques externes (FullCalendar et Leaflet).
- La géolocalisation activée dans le navigateur pour la boussole et la carte.
- Un appareil avec capteur de magnétomètre (optionnel, pour la boussole sur certains mobiles).

## Installation

1. Clonez le dépôt GitHub ou téléchargez les fichiers :
   ```bash
   git clone https://github.com/jawed56/pack-utilitaire-by-rabah.git

Accédez au dossier du projet :
bash

cd pack-utilitaire-by-rabah

Ouvrez le fichier index.html dans un navigateur :
Double-cliquez sur index.html, 
ou
cliquer sur le lien https://jawed56.github.io/calculatrice-scientifique/calculatrice-scientifique.html
Utilisez un serveur local pour éviter les restrictions CORS (recommandé) :
bash

npx http-server

Puis accédez à http://localhost:8080.

Note : Pour un usage hors ligne, téléchargez les bibliothèques FullCalendar et Leaflet et mettez à jour les chemins dans <head>.
Utilisation
Accéder à l'application :
Ouvrez index.html dans votre navigateur.

L'interface s'ouvre sur la calculatrice par défaut.

Naviguer entre les outils :
Utilisez les onglets en haut (Calculatrice, Agenda, Boussole, Chronomètre, Carte) pour basculer entre les fonctionnalités.

Calculatrice :
Entrez des calculs via les boutons.

Utilisez les fonctions scientifiques (ex. : sin, √) et changez le mode (degrés/radians).

Consultez l'historique ou utilisez la mémoire (M+, M-, MR, MC).

Agenda :
Ajoutez un événement en remplissant le formulaire (description, date, heure, type, couleur, et optionnellement latitude/longitude).

Cliquez sur "Utiliser ma position" pour remplir automatiquement les coordonnées.

Visualisez les événements dans la liste ou le calendrier (changez la vue via le menu déroulant).

Supprimez un événement en cliquant sur "Supprimer".

Boussole :
Activez la géolocalisation lorsque demandé.

Déplacez-vous d'au moins 5 mètres à l'extérieur pour calculer l'orientation (ou utilisez le magnétomètre si disponible).

Suivez les messages diagnostics pour améliorer la précision.

Chronomètre :
Cliquez sur "Démarrer" pour lancer, "Arrêter" pour mettre en pause, et "Réinitialiser" pour remettre à zéro.

Ajoutez des tours avec "Ajouter un tour".

Consultez l'historique des sessions sauvegardé.

Carte :
Autorisez la géolocalisation pour centrer la carte sur votre position.

Les événements de l'agenda apparaissent comme marqueurs (avec coordonnées fictives si non spécifiées).

Cliquez sur un marqueur pour voir les détails de l'événement.

Mode sombre :
Cliquez sur "Mode Sombre" (en haut à droite) pour basculer entre les thèmes clair et sombre.

Technologies utilisées
HTML5, CSS3, JavaScript : Structure, style, et logique de l'application.

FullCalendar (v5.11.3) : Pour le calendrier interactif de l'agenda.

Leaflet (v1.9.4) : Pour la carte interactive.

LocalStorage : Pour la persistance des événements, de l'historique du chronomètre, et des préférences (thème, couleur).

Geolocation API : Pour la boussole et la carte.

DeviceOrientation API : Pour la boussole sur les appareils avec magnétomètre.

Structure du projet

pack-utilitaire-by-rabah/
├── index.html         # Fichier principal contenant l'application
├── screenshots/       # Dossier pour les captures d'écran (optionnel)
└── README.md          # Documentation du projet

index.html : Contient tout le code HTML, CSS, et JavaScript. Les bibliothèques externes (FullCalendar, Leaflet) sont chargées via CDN.

screenshots/ : Ajoutez des images pour illustrer l'interface (non inclus par défaut).

Contribution
Les contributions sont les bienvenues ! Pour contribuer :
Forkez le dépôt.

Créez une branche pour votre fonctionnalité (git checkout -b feature/nouvelle-fonction).

Commitez vos changements (git commit -m "Ajout de nouvelle fonctionnalité").

Poussez votre branche (git push origin feature/nouvelle-fonction).

Ouvrez une Pull Request.

Veuillez respecter les conventions de code existantes et tester vos modifications localement.
Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
Note : Le fichier LICENSE sera ajouté ultérieurement ou contactez l'auteur pour plus d'informations.
Contact
Auteur : Rabah Loudjani
Email : loudjani.r@gmail.com
GitHub : https://github.com/jawed56

1. **Captures d'écran** :
   - Prenez des captures de chaque onglet (Calculatrice, Agenda, Boussole, Chronomètre, Carte) avec un outil comme `Cmd + Shift + 4` (Mac) ou `Win + Shift + S` (Windows).
   - Créez un dossier `screenshots/` dans votre projet et placez-y les images (ex. : `calculatrice.png`, `agenda.png`, etc.).
   - Mettez à jour les chemins dans la section "Captures d'écran" :
     
     | ![Calculatrice](screenshots/calculatrice.png) | ![Agenda](screenshots/agenda.png) | ...
     
   2. **Informations de contact** :
     
     - **Email** : loudjani.r@gmail.com
     - **GitHub** : [jawed56](https://github.com/jawed56)
     
     Coordonnées :
     
     - **Email** : loudjani.r@gmail.com
     - **GitHub** : [jawed56](https://github.com)
     
    3. **URL du dépôt GitHub** :
        git clone https://github.com/jawed56/pack-utilitaire-by-rabah.git
        git clone https://jawed56.github.io/calculatrice-scientifique/calculatrice-scientifique.html
         
  4. **Licence** :
    
  Copyright (c) 2025 Rabah
     Ce projet est privé et destiné à un usage personnel. Contactez l'auteur pour toute demande d'utilisation ou de distribution.

     
