# CV Statique

CV web statique et responsive, généré à partir de fichiers JSON.
[![Quality Gate Status](https://sonar.xwyk.fr/api/project_badges/measure?project=static_cv&metric=alert_status&token=sqb_caa9333ca1625e06c95b3aba29d115f71d2c2144)](https://sonar.xwyk.fr/dashboard?id=static_cv)

## Structure du projet

```
static-cv/
├── index.html              # Page principale
├── print.html              # Version imprimable
├── css/
│   ├── app.css             # Styles principaux
│   └── print.css           # Styles pour l'impression
├── js/
│   ├── app.js              # Script principal (chargement des données)
│   └── print.js            # Script pour la version imprimable
├── data/                   # Fichiers de données JSON
│   ├── infos.json          # Informations personnelles
│   ├── competences.json    # Liste des compétences
│   ├── experiences.json    # Expériences professionnelles
│   ├── diplomes.json       # Formation et diplômes
│   ├── projets.json        # Projets personnels/professionnels
│   ├── applications.json   # Applications utilisées
│   ├── passions.json       # Centres d'intérêt
│   ├── contact.json        # Informations de contact
│   └── *.json.example      # Fichiers d'exemple
├── minified/               # Fichiers minifiés (générés)
│   ├── css/
│   └── js/
└── scripts/
    └── minify.py           # Script de minification
```

## Configuration

### Changer le titre de la page

Modifiez la balise `<title>` dans `index.html` :

```html
<title>Votre Nom - Votre Poste</title>
```

### Modifier les données

Toutes les données du CV sont stockées dans des fichiers JSON dans le dossier `data/`. Copiez les fichiers `.json.example` et renommez-les sans l'extension `.example` :

```bash
cd data/
cp infos.json.example infos.json
cp competences.json.example competences.json
# ... etc pour chaque fichier
```

#### infos.json - Informations personnelles

```json
{
    "firstName": "Prénom",
    "lastName": "Nom",
    "position": "Votre Poste",
    "city": "Ville",
    "degree": "Bac+X",
    "description": "Description de votre profil",
    "photo": "https://url-vers-votre-photo.com/photo.jpg"
}
```

#### competences.json - Compétences

```json
[
    {
        "name": "Nom de la compétence",
        "icon": "🎯",           // Emoji ou URL d'image
        "level": 4              // Niveau de 1 à 5
    }
]
```

Le niveau (`level`) correspond au nombre de points remplis sur 5.

#### experiences.json - Expériences professionnelles

```json
[
    {
        "year": "2020 - Aujourd'hui",
        "company": "Entreprise | Ville",
        "title": "Intitulé du poste",
        "description": "Description des missions.<br>Sauts de ligne avec <br>."
    }
]
```

#### diplomes.json - Formation

```json
[
    {
        "year": "2020",
        "school": "École | Ville",
        "title": "Intitulé du diplôme"
    }
]
```

#### projets.json - Projets

```json
[
    {
        "name": "Nom du projet",
        "techno": "Technologies utilisées",
        "year": "2023",
        "description": "Description avec <a href=\"url\">liens</a> possibles."
    }
]
```

#### applications.json - Applications utilisées

```json
[
    {
        "name": "Nom de l'app",
        "icon": "https://url-favicon.ico",  // URL du favicon
        "url": "https://url-application.com"
    }
]
```

#### passions.json - Centres d'intérêt

```json
[
    {
        "name": "Nom de la passion",
        "icon": "🎯",
        "description": "Courte description"
    }
]
```

#### contact.json - Contact

```json
[
    {
        "label": "Type de contact",
        "icon": "✉️",
        "url": "mailto:email@example.com",  // Lien cliquable
        "value": "Texte affiché"
    }
]
```

## Minification

Après avoir modifié les fichiers CSS ou JS, lancez le script de minification :

```bash
python3 scripts/minify.py
```

Ce script :
- Supprime les commentaires
- Réduit les espaces inutiles
- Génère les fichiers minifiés dans `minified/css/` et `minified/js/`

## Déploiement

Ce CV est entièrement statique. Pour le déployer :

1. Uploadez tous les fichiers sur votre serveur web
2. Assurez-vous que `index.html` est accessible à la racine
3. Les fichiers JSON doivent être accessibles depuis le dossier `assets/data/`

### Hébergement gratuit

- **GitHub Pages** : Poussez le code sur un repository GitHub et activez Pages
- **Netlify** : Connectez votre repo ou glissez-déposez les fichiers
- **Vercel** : Importez directement depuis GitHub

## Personnalisation avancée

### Modifier les couleurs

Les couleurs sont définies dans les variables CSS au début de `css/app.css` :

```css
:root {
  --primary-color: #388fed;    /* Couleur principale */
  --secondary-color: #1043b2;  /* Couleur secondaire */
  --text-color: #cdc8c2;       /* Texte principal */
  --light-text: #9e9589;       /* Texte secondaire */
  --bg-color: #1b1d1e;         /* Fond */
  --card-bg: #181a1b;          /* Fond des cartes */
}
```

### Modifier le responsive

Les breakpoints sont définis dans les media queries :
- `1024px` : Tablettes
- `768px` : Mobiles
- `480px` : Petits mobiles

### Version imprimable

La version imprimable (`print.html`) utilise des styles spécifiques dans `css/print.css` pour une mise en page optimisée pour l'impression.

## Licence

Ce projet est libre de droit. Utilisez-le comme bon vous semble pour votre propre CV.
