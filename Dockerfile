# Dockerfile

# Usar la imagen oficial de Node.js como base
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto que el contenedor usará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "preview"]
