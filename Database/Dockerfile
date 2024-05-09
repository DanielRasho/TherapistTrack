# Utiliza la imagen oficial de MongoDB como imagen base
FROM mongo:latest

# Establece variables de entorno para MongoDB
# MongoDB no usa MYSQL_ROOT_PASSWORD, en su lugar, puedes configurar las credenciales directamente en la inicialización o a través de una configuración de seguridad más compleja
ENV MONGO_INITDB_ROOT_USERNAME=root_user
ENV MONGO_INITDB_ROOT_PASSWORD=root_password

# MongoDB no requiere que copies un esquema SQL como MySQL, ya que es una base de datos NoSQL
# Sin embargo, si deseas ejecutar scripts de inicialización (por ejemplo, para crear índices, usuarios adicionales, o bases de datos específicas), puedes añadirlos al directorio /docker-entrypoint-initdb.d/
# Suponiendo que tienes un script de inicialización llamado init-mongo.js:
COPY init-mongo.js /docker-entrypoint-initdb.d/

# Expone el puerto 27017 para permitir la comunicación hacia/desde el servidor
EXPOSE 27017

# Al iniciar el contenedor, MongoDB automáticamente ejecutará
# los scripts en /docker-entrypoint-initdb.d/ para inicializar la base de datos
