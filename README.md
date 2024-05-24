# departements

- Abdoul Majid Toudjani Soumana
- Merveille Nedumluba-Ang


Dans ce projet nous construisons une base de données de départements de France avec Nodejs et Mongodb.
Ce projet a pour but de nous familiariser dans la gestion des grosses quantités de données avec le Nosql

## Architecture du projet
Ce projet contient un serveur nodejs qui construit la base de données avec le fichier **departements-france.csv** téléchargé sur le site 
officiel du gouvernement https://www.data.gouv.fr/fr/datasets/departements-de-france/
Ce fichier contient la liste de tous les départements du pays.

L'idée géneral est d utiliser ce fichier avec l'API **mongoose** pour créer la base de données avec mongoose.connect
Ensuite nous avons transformé ce fichier csv en json pour le charger avec mongoose

## Lancement du projet
Afin de lancer le serveur vous devez déjà installer les modules nécessaires avec 
```
npm install 
```

puis lancer le serveur avec 
```
node server.js
```