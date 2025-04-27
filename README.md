# pack utilitaire-by-rabah

Bienvenue sur le pack utilitaire-by-rabah ! 🌈

Cette calculatrice web permet de réaliser des calculs scientifiques avancés, avec des fonctionnalités comme :
- Opérations de base (+, -, ×, ÷)
- Fonctions scientifiques (sin, cos, tan, log, etc.)
- Factorielle (x!) et inverse (1/x)
- Mémoire (M+, M-, MR, MC)
- Historique des calculs
- Mode degrés/radians

## Lien
Essayez-la ici : (https://jawed56.github.io/calculatrice-scientifique/calculatrice-scientifique.html)

Exemple :
markdown

# Pack Utilitaire By Rabah

Une application web tout-en-un regroupant cinq outils pratiques : une calculatrice scientifique, un agenda avec calendrier, une boussole géolocalisée, un chronomètre avec historique, et une carte interactive. Conçue pour être intuitive, responsive, et dotée d'un mode sombre.

2. Table des matières (optionnel)
Si le README est long, une table des matières facilite la navigation.

Exemple :
markdown

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

3. Fonctionnalités
Listez les principales fonctionnalités de chaque outil avec une brève description.

Exemple :
markdown

## Fonctionnalités

- **Calculatrice scientifique** :
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

4. Captures d'écran
Ajoutez des images pour illustrer l'interface (idéalement hébergées sur un service comme Imgur ou dans un dossier /screenshots du dépôt).

Exemple :
markdown

## Captures d'écran

| Calculatrice | Agenda | Boussole | Chronomètre | Carte |
|--------------|--------|----------|-------------|-------|
| ![Calculatrice](screenshots/calculatrice.png) | ![Agenda](screenshots/agenda.png) | ![Boussole](screenshots/boussole.png) | ![Chronomètre](screenshots/chronometre.png) | ![Carte](screenshots/carte.png) |

*Note : Remplacez les chemins par les URLs ou fichiers réels après avoir ajouté les captures.*

5. Prérequis
Indiquez ce dont l'utilisateur a besoin pour exécuter l'application.

Exemple :
markdown

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge).
- Une connexion Internet pour charger les bibliothèques externes (FullCalendar et Leaflet).
- La géolocalisation activée dans le navigateur pour la boussole et la carte.
- Un appareil avec capteur de magnétomètre (optionnel, pour la boussole sur certains mobiles).

6. Installation
Fournissez des instructions claires pour exécuter l'application localement.

Exemple :
markdown

## Installation

1. Clonez le dépôt GitHub ou téléchargez les fichiers :
   ```bash
   git clone https://github.com/votre-utilisateur/pack-utilitaire-by-rabah.git

Accédez au dossier du projet :
bash

cd pack-utilitaire-by-rabah

Ouvrez le fichier index.html dans un navigateur :
Double-cliquez sur index.html, ou

Utilisez un serveur local pour éviter les restrictions CORS (recommandé) :
bash

npx http-server

Puis accédez à http://localhost:8080.

Note : Pour un usage hors ligne, téléchargez les bibliothèques FullCalendar et Leaflet et mettez à jour les chemins dans <head>.

7. Utilisation
Expliquez comment utiliser l'application, avec des instructions pour chaque outil.

Exemple :
markdown

## Utilisation

1. **Accéder à l'application** :
   - Ouvrez `index.html` dans votre navigateur.
   - L'interface s'ouvre sur la calculatrice par défaut.

2. **Naviguer entre les outils** :
   - Utilisez les onglets en haut (Calculatrice, Agenda, Boussole, Chronomètre, Carte) pour basculer entre les fonctionnalités.

3. **Calculatrice** :
   - Entrez des calculs via les boutons.
   - Utilisez les fonctions scientifiques (ex. : `sin`, `√`) et changez le mode (degrés/radians).
   - Consultez l'historique ou utilisez la mémoire (M+, M-, MR, MC).

4. **Agenda** :
   - Ajoutez un événement en remplissant le formulaire (description, date, heure, type, couleur, et optionnellement latitude/longitude).
   - Cliquez sur "Utiliser ma position" pour remplir automatiquement les coordonnées.
   - Visualisez les événements dans la liste ou le calendrier (changez la vue via le menu déroulant).
   - Supprimez un événement en cliquant sur "Supprimer".

5. **Boussole** :
   - Activez la géolocalisation lorsque demandé.
   - Déplacez-vous d'au moins 5 mètres à l'extérieur pour calculer l'orientation (ou utilisez le magnétomètre si disponible).
   - Suivez les messages diagnostics pour améliorer la précision.

6. **Chronomètre** :
   - Cliquez sur "Démarrer" pour lancer, "Arrêter" pour mettre en pause, et "Réinitialiser" pour remettre à zéro.
   - Ajoutez des tours avec "Ajouter un tour".
   - Consultez l'historique des sessions sauvegardé.

7. **Carte** :
   - Autorisez la géolocalisation pour centrer la carte sur votre position.
   - Les événements de l'agenda apparaissent comme marqueurs (avec coordonnées fictives si non spécifiées).
   - Cliquez sur un marqueur pour voir les détails de l'événement.

8. **Mode sombre** :
   - Cliquez sur "Mode Sombre" (en haut à droite) pour basculer entre les thèmes clair et sombre.

8. Technologies utilisées
Listez les technologies et bibliothèques utilisées pour le développement.

Exemple :
markdown

## Technologies utilisées

- **HTML5**, **CSS3**, **JavaScript** : Structure, style, et logique de l'application.
- **FullCalendar (v5.11.3)** : Pour le calendrier interactif de l'agenda.
- **Leaflet (v1.9.4)** : Pour la carte interactive.
- **LocalStorage** : Pour la persistance des événements, de l'historique du chronomètre, et des préférences (thème, couleur).
- **Geolocation API** : Pour la boussole et la carte.
- **DeviceOrientation API** : Pour la boussole sur les appareils avec magnétomètre.

9. Structure du projet
Décrivez l'organisation des fichiers pour aider les développeurs à comprendre le code.

Exemple :
markdown

## Structure du projet

pack-utilitaire-by-rabah/
├── index.html         # Fichier principal contenant l'application
├── screenshots/       # Dossier pour les captures d'écran (optionnel)
└── README.md          # Documentation du projet

- `index.html` : Contient tout le code HTML, CSS, et JavaScript. Les bibliothèques externes (FullCalendar, Leaflet) sont chargées via CDN.
- `screenshots/` : Ajoutez des images pour illustrer l'interface (non inclus par défaut).

10. Contribution
Indiquez comment d'autres développeurs peuvent contribuer (si vous acceptez les contributions).

Exemple :
markdown

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :
1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonction`).
3. Commitez vos changements (`git commit -m "Ajout de nouvelle fonctionnalité"`).
4. Poussez votre branche (`git push origin feature/nouvelle-fonction`).
5. Ouvrez une Pull Request.

Veuillez respecter les conventions de code existantes et tester vos modifications localement.

11. Licence
Spécifiez la licence sous laquelle le projet est distribué (par exemple, MIT pour un projet open-source).

Exemple :
markdown

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

*Note : Si vous n'avez pas de fichier LICENSE, vous pouvez inclure le texte de la licence MIT directement dans le README ou préciser que le projet est privé/propriétaire si applicable.*

12. Contact
Fournissez des moyens de vous contacter pour des questions ou des retours.

Exemple :
markdown

## Contact

- **Auteur** : Rabah
- **Email** : votre.email@example.com (remplacez par votre email ou supprimez si non souhaité)
- **GitHub** : [votre-utilisateur](https://github.com/votre-utilisateur)

Exemple complet de README.md
Voici un exemple complet de fichier README.md basé sur les sections ci-dessus :
markdown

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

- **Calculatrice scientifique** :
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

*Note : Ajoutez les captures d'écran dans un dossier `screenshots/` et mettez à jour les chemins.*

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge).
- Une connexion Internet pour charger les bibliothèques externes (FullCalendar et Leaflet).
- La géolocalisation activée dans le navigateur pour la boussole et la carte.
- Un appareil avec capteur de magnétomètre (optionnel, pour la boussole sur certains mobiles).

## Installation

1. Clonez le dépôt GitHub ou téléchargez les fichiers :
   ```bash
   git clone https://github.com/votre-utilisateur/pack-utilitaire-by-rabah.git

Accédez au dossier du projet :
bash

cd pack-utilitaire-by-rabah

Ouvrez le fichier index.html dans un navigateur :
Double-cliquez sur index.html, ou

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
Contact
Auteur : Rabah

Email : votre.email@example.com

GitHub : votre-utilisateur

---

### **Instructions pour créer le README.md**

1. **Créer le fichier** :
   - Dans le dossier racine de votre projet (à côté de `index.html`), créez un fichier nommé `README.md`.
   - Copiez/collez le contenu ci-dessus dans ce fichier.

2. **Personnaliser** :
   - **Captures d'écran** : Prenez des captures de chaque onglet (Calculatrice, Agenda, etc.) et placez-les dans un dossier `screenshots/`. Mettez à jour les chemins dans la section "Captures d'écran" (ex. : `screenshots/calculatrice.png`).
   - **Contact** : Remplacez `votre.email@example.com` et `votre-utilisateur` par vos informations réelles ou supprimez-les si vous préférez.
   - **Lien GitHub** : Si le projet est sur GitHub, mettez à jour l'URL dans les sections "Installation" et "Contact".
   - **Licence** : Si vous choisissez la licence MIT, créez un fichier `LICENSE` avec le texte standard de la licence MIT. Sinon, précisez que le projet est privé ou sous une autre licence.

3. **Ajouter des captures d'écran** :
   - Utilisez un outil comme la fonction de capture d'écran de votre système (ex. : `Cmd + Shift + 4` sur Mac, `Win + Shift + S` sur Windows).
   - Hébergez les images sur Imgur ou dans le dossier `screenshots/` si vous utilisez un dépôt GitHub.
   - Mettez à jour les liens dans la section "Captures d'écran".

4. **Tester l'affichage** :
   - Si vous utilisez GitHub, poussez le fichier `README.md` vers votre dépôt et vérifiez son rendu.
   - Sinon, utilisez un éditeur Markdown (ex. : Visual Studio Code avec une extension Markdown) pour prévisualiser.

---

### **Conseils supplémentaires**
- **Ton** : Le README est rédigé dans un ton professionnel mais accessible, adapté aux utilisateurs et aux développeurs. Si vous préférez un ton plus décontracté ou formel, je peux ajuster.
- **Langue** : Le README est en français pour correspondre à votre demande. Si vous souhaitez une version bilingue (français/anglais) pour un public international, je peux la fournir.
- **Mises à jour futures** : Si vous ajoutez des fonctionnalités (ex. : compte à rebours, recherche de lieux sur la carte), mettez à jour la section "Fonctionnalités" pour refléter les nouveautés.

Si vous avez des préférences spécifiques (ex. : ajouter une section, modifier le ton, inclure un logo), ou si vous souhaitez que je génère un fichier `LICENSE` ou que je vous aide à créer des captures d'écran, faites-le-moi savoir ! Voulez-vous que je modifie ou ajoute quelque chose au README avant de finaliser ?

je dois faire un copier de tout ça et le coller sur le fichier README.md ?

Oui, vous pouvez copier directement le contenu du fichier README.md fourni ci-dessous et le coller dans un fichier nommé README.md dans le dossier racine de votre projet (à côté de index.html). Cependant, avant de le faire, il y a quelques personnalisations mineures à effectuer pour adapter le contenu à votre contexte (par exemple, ajouter vos informations de contact, préciser l'URL de votre dépôt GitHub, ou inclure des captures d'écran). Je vais vous guider étape par étape pour créer et remplir le fichier README.md, et je vais fournir une version finale du contenu que vous pourrez copier/coller directement.
Étapes pour créer et remplir le fichier README.md
Créer le fichier README.md :
Dans le dossier de votre projet (où se trouve index.html), créez un nouveau fichier texte nommé README.md. Vous pouvez le faire :
Avec un éditeur de code (ex. : Visual Studio Code) : Fichier > Nouveau fichier > README.md.

Ou manuellement : Créez un fichier texte et renommez-le README.md.

Assurez-vous que l'extension est bien .md (Markdown).

Copier le contenu :
Copiez le contenu du README.md fourni ci-dessous (version finale adaptée à votre projet Pack Utilitaire By Rabah).

Collez-le dans le fichier README.md à l'aide de votre éditeur de texte ou de code.

Personnaliser le contenu (facultatif mais recommandé) :
Captures d'écran : Si vous avez des captures d'écran, placez-les dans un dossier screenshots/ dans votre projet et mettez à jour les chemins dans la section "Captures d'écran". Sinon, vous pouvez supprimer cette section ou la laisser en attente (les chemins actuels sont des placeholders).

Contact : Remplacez votre.email@example.com et votre-utilisateur par vos véritables email et nom d'utilisateur GitHub, ou supprimez ces lignes si vous ne souhaitez pas partager vos coordonnées.

URL du dépôt : Si votre projet est hébergé sur GitHub, remplacez https://github.com/votre-utilisateur/pack-utilitaire-by-rabah par l'URL réelle de votre dépôt.

Licence : Si vous choisissez la licence MIT, créez un fichier LICENSE avec le texte standard (je peux vous le fournir). Sinon, modifiez la section "Licence" pour indiquer que le projet est privé ou sous une autre licence.

Enregistrer et tester :
Enregistrez le fichier README.md.

Si vous utilisez GitHub, poussez le fichier vers votre dépôt (git add README.md, git commit -m "Ajout du README", git push) et vérifiez son rendu sur la page principale du dépôt.

Sinon, ouvrez le fichier dans un éditeur Markdown (ex. : Visual Studio Code avec l'extension Markdown Preview) pour vérifier son apparence.

Contenu final du README.md
Voici le contenu complet du fichier README.md que vous pouvez copier/coller directement. Il est prêt à l'emploi, avec des placeholders pour les personnalisations (captures d'écran, contact, URL GitHub). Vous pouvez l'utiliser tel quel ou effectuer les modifications suggérées après l'avoir collé.
markdown

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

- **Calculatrice scientifique** :
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
   git clone https://github.com/votre-utilisateur/pack-utilitaire-by-rabah.git

Accédez au dossier du projet :
bash

cd pack-utilitaire-by-rabah

Ouvrez le fichier index.html dans un navigateur :
Double-cliquez sur index.html, ou

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
Auteur : Rabah

Email : votre.email@example.com

GitHub : votre-utilisateur

---

### **Personnalisations à faire après avoir collé**

1. **Captures d'écran** :
   - Prenez des captures de chaque onglet (Calculatrice, Agenda, Boussole, Chronomètre, Carte) avec un outil comme `Cmd + Shift + 4` (Mac) ou `Win + Shift + S` (Windows).
   - Créez un dossier `screenshots/` dans votre projet et placez-y les images (ex. : `calculatrice.png`, `agenda.png`, etc.).
   - Mettez à jour les chemins dans la section "Captures d'écran" :
     ```markdown
     | ![Calculatrice](screenshots/calculatrice.png) | ![Agenda](screenshots/agenda.png) | ...
     ```
   - Si vous n'avez pas encore de captures, laissez la section telle quelle ou supprimez-la temporairement.

2. **Informations de contact** :
   - Remplacez :
     ```markdown
     - **Email** : votre.email@example.com
     - **GitHub** : [votre-utilisateur](https://github.com/votre-utilisateur)
     ```
     Par vos véritables coordonnées, par exemple :
     ```markdown
     - **Email** : rabah@example.com
     - **GitHub** : [rabah-dev](https://github.com/rabah-dev)
     ```
     Ou supprimez ces lignes si vous ne souhaitez pas les partager.

3. **URL du dépôt GitHub** :
   - Si votre projet est sur GitHub, remplacez :
     ```markdown
     git clone https://github.com/votre-utilisateur/pack-utilitaire-by-rabah.git
     ```
     Par l'URL réelle, par exemple :
     ```markdown
     git clone https://github.com/rabah-dev/pack-utilitaire-by-rabah.git
     ```
   - Si le projet n'est pas sur GitHub, laissez tel quel ou supprimez la ligne de clonage et mentionnez simplement : "Téléchargez les fichiers du projet."

4. **Licence** :
   - Si vous voulez utiliser la licence MIT, créez un fichier `LICENSE` avec le texte suivant :
     ```markdown
     MIT License

     Copyright (c) 2025 Rabah

         ## Licence

     Ce projet est privé et destiné à un usage personnel. Contactez l'auteur pour toute demande d'utilisation ou de distribution.
     ```

---

### **Vérifications après collage**

- **Ouvrir le fichier** : Ouvrez `README.md` dans un éditeur (ex. : VS Code) pour vérifier que le formatage Markdown est correct (titres avec `#`, listes avec `-`, etc.).
- **Prévisualiser** : Utilisez un visualiseur Markdown (ex. : extension Markdown Preview dans VS Code) ou poussez le fichier sur GitHub pour voir le rendu.
- **Tester les liens** : Si vous ajoutez des captures d'écran ou des URLs (GitHub, LICENSE), assurez-vous qu'elles fonctionnent.

---

### **Questions fréquentes**

- **Dois-je faire toutes les personnalisations maintenant ?**
  Non, vous pouvez copier/coller le contenu tel quel et effectuer les personnalisations (captures, contact, GitHub) plus tard. Le README est fonctionnel même avec les placeholders.

- **Que faire si je n'ai pas de captures d'écran ?**
  Laissez la section "Captures d'écran" telle quelle avec le message "Les captures d'écran seront ajoutées prochainement", ou supprimez-la temporairement.

- **Dois-je créer un dépôt GitHub ?**
  Ce n'est pas obligatoire. Si vous travaillez localement, le README est utile pour documenter le projet pour vous-même ou pour d'autres utilisateurs. Si vous voulez partager le projet, GitHub est recommandé pour héberger le code et afficher le README.

- **Comment ajouter le fichier LICENSE ?**
  Si vous choisissez la licence MIT, créez un fichier `LICENSE` dans le dossier racine et copiez le texte fourni ci-dessus. Le README fait référence à ce fichier.

---

### **Prochaines étapes**

1. Copiez le contenu du `README.md` ci-dessus dans un fichier `README.md` dans votre projet.
2. Enregistrez et vérifiez le rendu (localement ou sur GitHub).
3. Si vous souhaitez des captures d'écran, prenez-les et mettez à jour la section correspondante.
4. Si vous utilisez GitHub, poussez le fichier :
   ```bash
   git add README.md
   git commit -m "Ajout du README"
   git push


