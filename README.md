# Unir-pdfs

App web que permite unificar varios PDFs en uno solo.

Esta App está desarrollada en React y se ejecuta desde el lado del cliente.

## Instalación

Clonar el repositorio de github.

`$ git clone url`

Instalar las dependencias a través de NPM.

`$ npm install`

Ejecutar el comando de build.

`$ npm run build`

Esto generará los archivos necesarios en una carpeta dist/, listos para ser subidos a un un servidor de estáticos.

- logo.svg
- bundle.js
- index.html

## Cómo se usa

Los archivos estáticos generados en el build deben alojarse en un servidor web o pueden ser utilizados desde un entorno local.

La interfaz de la aplicación posee unicamente dos botones, uno desde el cual se seleccionan los archivos y otro con el cual se confirma la operación. El archivo resultante se descarga localmente.
