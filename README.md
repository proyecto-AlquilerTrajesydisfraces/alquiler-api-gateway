# Proyecto de Ciclo IV: Tienda alquiler trajes y disfraces - arquitectura microservicios
Este proyecto está enfocado en la creación de una aplicación web que permita de forma sistemática el almacenamiento y gestion de inventarios de productos elaborados por las comunidades indigenas del pais y en una versión siguiente de manera adicional se planea mejorar el frontend con imagenes referentes a cada producto ingresado.

### ApiGateway
El API Gateway es el componente encargado de recibir y responder las solicitudes del Componente Web. Por esta razón, es necesario que el API Gateway se comunique con el Componente Web y con los microservicios que le proveen las funcionalidades de la aplicación.

### Contenido de Este repositorio: 

 1. Se tiene una carpeta llamada src donde donde se administran las aplicaciones que el proyecto este utiliza y con las que realiza la conexion a los backends, esta carpeta contiene las carpetas: dataSources, resolvers, typeDefs y utils, asi como los archivos index.js, server.js 

 2. se creo un archivo dockerfile el cual es un archivo de texto plano que contiene una serie de instrucciones necesarias para crear una imagen en un contenedor

 3. se tiene el archivo package.json en él se encuentran los atributos del proyecto que
utilizará NodeJS para administrar y configurar el servidor.

 ### Requerimientos 
```
 "dependencies": {
        "apollo-datasource-rest": "^3.6.1",
        "apollo-server": "^3.9.0",
        "graphql": "^15.8.0",
        "lodash": "^4.17.21",
        "micro": "^9.3.4",
        "node-fetch": "^2.6.1"
    }
```

### Ejecución del proyecto

para ejecutar el proyecto en local:

1. Se descarga el proyecto comprimido o se clona de GitHub
   ```
    git clone https://github.com/proyecto-AlquilerTrajesydisfraces/alquiler-api-gateway.git
   ```
2. Al tener el proyecto en el ordenador, por la consola de comandos de ingresa al proyecto utilizando el comando cd:
   ```
    cd alquiler-api-gateway-main
   ```
3. se debe ingresar el siguiente comando para ejecutar el proyecto en local(computador personal o servidor):

   ```
    node src/index.js.
   ```
 Es posible comprobar su funcionamiento ingresando a la url asignada http://localhost:4000/
 
El proyecto se encuentra desplegado en la plataforma heroku:

xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Diagrama de despliegue 

la parte sombreada hace referencia al despliegue de componentes de la parte apiGateway del proyecto

![image](https://user-images.githubusercontent.com/84297258/176795133-8677baf5-a00a-4f2e-89e1-9f9d28bcfbe5.png)

