# Dockerfile
FROM node:20

# Arbeitsverzeichnis
WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Projektdateien kopieren
COPY . .


# Exponierter Port
EXPOSE 3300

# Start im Dev-Modus (z. B. mit nodemon)
CMD ["npm", "run", "dev"]