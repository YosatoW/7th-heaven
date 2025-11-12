# 1. ☕ 7th Heaven – Midgar Edition  
**Eine stilvolle Webapplikation inspiriert von Final Fantasy VII**

Willkommen im *7th Heaven* – der Oase im Herzen von Midgar.  
Dieses Projekt entstand als Transferarbeit und demonstriert moderne Webentwicklung mit Node.js, Express, Pug und Docker.  
Hier verbinden sich Technologie, Design und ein Hauch FF7-Atmosphäre.

<!-- ToC -->
- [1. ☕ 7th Heaven – Midgar Edition](#1--7th-heaven--midgar-edition)
  - [1.1. 💠 Features](#11--features)
  - [1.2. 🐋 Docker – Schnellstart](#12--docker--schnellstart)
    - [1.2.1. **Docker installieren**](#121-docker-installieren)
    - [Git installieren (optional)](#git-installieren-optional)
  - [Projekt herunterladen](#projekt-herunterladen)
    - [Option A: Git Clone](#option-a-git-clone)
    - [Option B: ZIP Download](#option-b-zip-download)
  - [1.3. **.env Datei (Konfiguration)**](#13-env-datei-konfiguration)
  - [1.6. **Projektstruktur**](#16-projektstruktur)
  - [Starten](#starten)
    - [Container bauen und stearten](#container-bauen-und-stearten)
    - [Im Browser öffnen](#im-browser-öffnen)
  - [Optional: Lokale Entwicklung ohne Docker](#optional-lokale-entwicklung-ohne-docker)
<!-- /ToC -->

---

## 1.1. 💠 Features

- 🔹 Node.js + Express Backend
- 🔹 Pug Templates für flexible Views
- 🔹 Responsive Layout & CSS-Struktur
- 🔹 Galerie mit Impressionen aus dem 7th Heaven
- 🔹 Fehlerseiten im Midgar-Stil
- 🔹 Docker-Setup für einfache Installation & Deployment
- 🔹 `.env`-Datei für konfigurierbare Umgebungsvariablen
- 🔹 Automatische Migration mit Drizzle ORM


## 1.2. 🐋 Docker – Schnellstart

Die einfachste Möglichkeit, das Projekt zu starten:

### 1.2.1. **Docker installieren**
- Falls noch nicht vorhanden:<br>
👉 [https://www.docker.com/get-started](https://www.docker.com/get-started)
- Installiere und starte Docker Desktop

### Git installieren (optional)
- Lade Git herunter:<br>
👉 [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Installiere Git, falls du den Code direkt von GitHub klonen möchtest.

---

## Projekt herunterladen

### Option A: Git Clone
- VS Code öffnen und in Terminal eingeben:
```ps1
git clone https://github.com/YosatoW/7th-heaven.git
code 7th-heaven
```

### Option B: ZIP Download
- Lade das Projekt als ZIP von GitHub herunter.
- Entpacke es in einen Ordner deiner Wahl.

---

## 1.3. **.env Datei (Konfiguration)**
Bevor du die Anwendung startest (lokal oder per Docker),
muss im Projekt-Root eine Datei namens `.env` erstellt werden.

Diese enthält deine grundlegenden Umgebungsvariablen, z. B.:
```env
DATABASE_URL=postgresql://[POSTGRES_USER]:[POSTGRES_PASSWORD]@webengineering:5432/[POSTGRES_DB]
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```
*(Die Datei .env wird nicht in GitHub hochgeladen – sie bleibt lokal.)*

---

## 1.6. **Projektstruktur**
```csharp
7th-heaven/
├── views/                # Pug Templates
│   ├── layout.pug
│   ├── partials/
│   └── page/
├── public/               # Statische Dateien (CSS, JS, Bilder)
├── src/                  # API / Datenbank / Utils
├── server.js                # Hauptserver
├── docker-compose.yml
├── Dockerfile
└── README.md
```

---

## Starten
### Container bauen und stearten
```ps1
docker compose up -d --build
```

### Im Browser öffnen
- App: [http://localhost:80](http://localhost:80)

---

## Optional: Lokale Entwicklung ohne Docker
```ps1
npm install
npm run dev
```
