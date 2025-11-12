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
    - [1.2.2. **Container starten**](#122-container-starten)
    - [1.2.3. **Im Broswser öffnen**](#123-im-broswser-öffnen)
  - [1.3. **.env Datei (Konfiguration)**](#13-env-datei-konfiguration)
  - [1.4. **Entwicklung (optional)**](#14-entwicklung-optional)
  - [1.5. **Entwicklung (optional)**](#15-entwicklung-optional)
  - [1.6. **Projektstruktur**](#16-projektstruktur)
  - [1.7. **Stil \& Atmosphäre**](#17-stil--atmosphäre)
  - [1.8. **404 im Midgar-Stil**](#18-404-im-midgar-stil)
  - [1.9. **Docker Hub**](#19-docker-hub)
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


## 1.2. 🐋 Docker – Schnellstart

Die einfachste Möglichkeit, das Projekt zu starten:

### 1.2.1. **Docker installieren**
Falls noch nicht vorhanden:  
👉 [https://www.docker.com/get-started](https://www.docker.com/get-started)

### 1.2.2. **Container starten**

```bash
docker run -d -p 3000:3000 wotasoy/7th-heaven:latest
```

### 1.2.3. **Im Broswser öffnen**
👉 [https://localhost:3000](https://localhost:3000)

---

## 1.3. **.env Datei (Konfiguration)**
Bevor du die Anwendung startest (lokal oder per Docker),
muss im Projekt-Root eine Datei namens `.env` erstellt werden.

Diese enthält deine grundlegenden Umgebungsvariablen, z. B.:
```env
DATABASE_URL=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```
*(Die Datei .env wird nicht in GitHub hochgeladen – sie bleibt lokal.)*

---

## 1.4. **Entwicklung (optional)**
Wenn du den Code lokal staten möchtest:
```bash
git clone https://github.com/YosatoW/7th-heaven.git
cd 7th-heaven
npm install
npm start
```

---

## 1.5. **Entwicklung (optional)**
Wenn du den Code lokal staten möchtest:

```ps1
docker build -t wotasoy/7th-heaven:latest .
docker run -d -p 3000:3000 wotasoy/7th-heaven:latest
```
Oder mit Compose:

```ps1

docker compose up -d --build
```

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

## 1.7. **Stil & Atmosphäre**
> „In einer Stadt, die niemals schläft, braucht jeder einen Ort, an dem er kurz vergessen kann, wer er ist.“
— *Tifa Lockhart*

Dieses Projekt greift visuelle und erzählerische Elemente aus Midgar und dem 7th Heaven auf:
Rostige Rohre, sanftes Licht, metallischer Glanz – und ein Hauch von Nostalgie.
Selbst eine einfache 404-Seite erzählt hier eine kleine Geschichte.

---

## 1.8. **404 im Midgar-Stil**
> ❌ 404 — Ort nicht gefunden<br>
Die Moiren haben diesen Pfad aus dem Schicksalsgeflecht geschnitten.
Vielleicht warst du nie dazu bestimmt, ihn zu betreten...
Kehre sicher zum 7th Heaven zurück.

## 1.9. **Docker Hub**
Image: [https://hub.docker.com/r/HalliGalli/7th-heaven](https://hub.docker.com/r/HalliGalli/7th-heaven)
