<p align="center">
    <img alt="Web Server" title="Web Server" src="https://github.com/edwin06111998/Imagenes/blob/main/Proceso%20Chatbot/React%20JS%20Kruger.jpg">
  </a>
</p>
<h1 align="center"> Sistema de control de vacunación </h1> <br>

## Tabla de contenidos

- [Introducción](#introduction)
- [Funciones](#features)
- [Retroalimentación](#feedback)
- [Contribuidores](#contributors)
- [Proceso de construcción](#build-process)
- [Contacto](#acknowledgments)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introducción

Portal web para llevar un registro del inventario del estado de vacunación de los empleados. La plataforma consta de dos roles: Administrador y Usuario, cada uno con funcionalidades específicas. Cabe destacar que para este proyecto se utilizó el LocalStorage para obtener persistencia en los datos.

**Dispinible para Web**

<p align="center">
  <img src = "https://github.com/edwin06111998/Imagenes/blob/main/Proceso%20Chatbot/Login%20Kruger.jpg" width=1000>
</p>

## Funciones

Estas son algunas de las características del sistema de control de vacunas:

* Permitir iniciar sesión como administrador.
* Permitir iniciar sesión como usuario.
* Listar los empleados desde un archivo json cargado en el LocalStorage.
* Editar información de empleado desde el portal de administrador.
* Editar información de empleado desde el portal de usuario.
* Agregar nuevo empleado desde el portal de administrador.
* Eliminar empleado desde el portal de administrador.
* Persistencia en los nuevos registros, cuando se crea un usuario, automáticamente está listo para iniciar sesión.
<h1></h1>

## Herramientas utilizadas

- React JS
- JavaScript
- BootStrap
- LocalStorage
- HTML, CSS

Importante: los datos se encuentran en /data, el archivo usuarios.json es el único que se carga en el LocalStorage.

<p align="center">
  <img src = "https://github.com/edwin06111998/Imagenes/blob/main/Proceso%20Chatbot/Perfil%20Usuario%20Kruger.jpg" width=700>
</p>

## Proceso de construcción

- Clonar este repositorio.
- Instalar Node y NPM, aquí un enlace para su descarga (https://www.cursosgis.com/como-instalar-node-js-y-npm-en-4-pasos/).
- Abrir una terminal en el directorio del repositorio, luego ejectar el comando *npm install*.
- Una vez instaladas las dependencias, ejecutar el proyecto con el comando *npm start* >s<
- Y listo, esto ejecutará el sistema web en el puerto 3000, en caso de que ese puerto esté ocupado, presionar Y en la terminar para que se ejecute en otro puerto libre.
- Para ver el archivo dinámico cargado en el LocalStorage, dirigirse a Inspeccionar/Aplicación/Storage/LocalStorage, allí estará un archivo con los datos de los usuarios, servirá para comprobar que los usuarios son actualizados, agregados o eliminados según sea el caso.
  
Importante: las versiones de Node y NPM que se utilizaron en este proyecto son:
  Node: 16.19.1
  NPM: 8.19.3
  <p align="center">
  <img src = "https://github.com/edwin06111998/Imagenes/blob/main/Proceso%20Chatbot/Admin%20Kruger.jpg" width=1200>
</p>

## Retroalimentación

Siéntete libre de comentarme tu experiencia utilizando este sistema, puedes escribir al siguiente correo: eeveloz@espol.edu.ec. Tus comentarios son importantes para seguir haciendo robusto este sistema.

## Contribuidores

Este proyecto ha sido desarrollado únicamente por mí (Edwin Veloz).


## Contacto

- LinkedIn: www.linkedin.com/in/edwin-veloz-2153a9137
- Correo: eeveloz@espol.edu.ec
