# Define la imagen base a utilizar
FROM node:14

# Crea una carpeta para el backend y establece su directorio de trabajo
WORKDIR /app/backend

# Copia el archivo package.json y package-lock.json al contenedor
COPY ./backend/package*.json ./

# Instala las dependencias del backend
RUN npm install

# Copia el resto de los archivos del backend al contenedor
COPY ./backend ./

# Expone el puerto 3001 para el backend
EXPOSE 3001

# Define el comando para ejecutar el backend
CMD ["npm", "start"]
