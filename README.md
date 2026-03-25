# 🌤️ Weather App

Une application web permettant de consulter la météo en temps réel et les prévisions sur plusieurs jours pour n'importe quelle ville dans le monde.

> Projet réalisé pour pratiquer React, découvrir Node.js côté backend et apprendre à consommer une API externe.

---

## 📸 Screenshots
<img width="1345" height="623" alt="C1" src="https://github.com/user-attachments/assets/ee3d253d-d9c8-44c0-bc62-1401e67caca7" />
<img width="1292" height="479" alt="C2" src="https://github.com/user-attachments/assets/df09e606-f681-40c7-803e-5264be7f94cf" />
<img width="1313" height="602" alt="C3" src="https://github.com/user-attachments/assets/0cd69318-5fc6-47c4-a6fd-d7ff064cc77a" />


---

## ✨ Fonctionnalités

- 🔍 Recherche météo par ville
- 🌡️ Affichage de la météo en temps réel (température, humidité, vent...)
- 📅 Prévisions sur plusieurs jours

---

## 🛠️ Technologies utilisées

### Frontend
- [React.js](https://reactjs.org/)
- CSS / HTML

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

### API
- [WeatherAPI](https://www.weatherapi.com/)

---

## 📁 Structure du projet

```
weather-app/
├── frontend/         # Application React
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/          # Serveur Node.js / Express
│   ├── index.js
│   └── package.json
└── README.md
```

---

## 🚀 Installation & lancement en local

### Prérequis

- Node.js installé sur ta machine
- Une clé API gratuite sur [weatherapi.com](https://www.weatherapi.com/)

### 1. Cloner le projet

```bash
git clone https://github.com/Ericjason2/weather_app.git
cd weather-app
```

### 2. Configurer le Backend

```bash
cd backend
npm install
```

Crée un fichier `.env` à la racine du dossier `backend/` :

```env
API_KEY=ta_clé_api_ici
PORT=5000
```

Lance le serveur :

```bash
node index.js
```

### 3. Configurer le Frontend

```bash
cd ../frontend
npm install
npm start
```

L'application sera accessible sur `http://localhost:3000`

---

## 🔑 Variables d'environnement

| Variable | Description |
|---|---|
| `API_KEY` | Ta clé API WeatherAPI |
| `PORT` | Port du serveur backend (défaut : 5000) |


---

## 👨‍💻 Auteur

Fait avec 💙 dans le cadre de mon apprentissage en développement web.
