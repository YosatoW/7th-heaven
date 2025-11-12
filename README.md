# 7th Heaven – Transferarbeit
Docker Image: [Halli Galli - wotasoy/7th-heaven](https://hub.docker.com/repository/docker/wotasoy/HalliGalli).

Startanleitung:
1. Docker installieren (https://docker.com)
2. Terminal öffnen und ausführen:
   docker run -d -p 3000:3000 wotasoy/7th-heaven
3. Im Browser öffnen:
   http://localhost:3000





Dieses Projekt wurde mit **Node.js, Express, Pug und Docker** erstellt.  
Es simuliert die Atmosphäre des „7th Heaven“ in Midgar, inspiriert von Final Fantasy VII.

## 📦 Installation
```bash
docker compose up -d --build
```


7th Heaven – Transferarbeit
────────────────────────────


Startanleitung:
1. Docker installieren (https://docker.com)
2. Terminal öffnen und ausführen:
   docker run -d -p 3000:3000 deinname/7th-heaven:latest
3. Im Browser öffnen:
   http://localhost:3000


**Starte deinen Server:**
npm run dev










src/
├── api/
│   └── api.js <!-- index.js  -->
├── db/
│   └── schema.js
├── contats.js
├── database.js
├── newsletter.js
└── posts.js









views/
└── page/
│   ├── events.pug
│   ├── jobs.pug
│   ├── stiftung.pug
│   ├── essen/
│   │   ├── feiern.pug
│   │   ├── menu.pug
│   │   └── specials.pug
│   ├── kontakt/
│   │   ├── datenschutz.pug
│   │   ├── impressum.pug
│   │   └── kontakte.pug
│   └── ueber-uns/
│        ├── events.pug
│        ├── jobs.pug
│        └── stiftung.pug
├── partials/
│   ├── footer.pug
│   ├── gallery.pug
│   ├── header.pug
│   ├── maintenance.pug
│   ├── sidebar.pug
│   ├── slider.pug
│   └── sliderauto.pug
├── home.pug
├── layout.pug
└── route-maintenance.pug


https://github.com/Splidejs/splide-extension-auto-scroll/blob/master/dist/js/splide-extension-auto-scroll.js




docker compose exec minitwitter1 npx drizzle-kit push
docker compose exec minitwitter2 npx drizzle-kit push
