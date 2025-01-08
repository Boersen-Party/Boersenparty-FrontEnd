### STAGE 1: BUILD ###
FROM node:22-alpine AS build
WORKDIR /app

# Kopiere nur die package.json und package-lock.json zuerst (Caching)
COPY package*.json ./
RUN npm install

# Kopiere den Rest des Codes
COPY . .

# Führe den Build durch
RUN npm run build --configuration production

### STAGE 2: RUN ###
FROM nginx:latest AS ngi

# Kopiere die kompilierten Angular-Dateien in das Nginx-Root-Verzeichnis
COPY --from=build /app/dist/boersen-party-front-end /usr/share/nginx/html

# Kopiere die Nginx-Konfiguration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponiere den Standard-Port 80
EXPOSE 80
