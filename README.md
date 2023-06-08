# Festival Musical

Proyecto implementando SAAS y Gulp

## Descripción del proyecto

Este proyecto fue realizado con fines de aprendizaje para la separación de las hojas de estilos en archivos SCSS, 
además de la automatización con la ayuda de Gulp.

Utilizamos smooth scrolling, ventanas modales con JS, estilización con snippets de SCSS, variables con SCSS...

## Archivos que deben ser omitidos en un proyecto real

En caso de ser un proyecto próximo a subir a producción se debería omitir el upload de algunos archivos:

- Carpeta `node_modules` y `package-lock.json`: El desarrollador instala estos paquetes en su equipo al escribir el comando `npm install`.
- `package.json` y `gulpfile.js`: Sirven para el desarrollador, leer dependencias de desarrollo, automatizar tareas, etc.
- Carpeta `src`: Los archivos se leen de esta carpeta y se compilan en la carpeta `build`.

Como mencioné anteriormente, estos archivos y carpetas no son necesarios, pero con fines de aprendizaje fueron subidos debido a que podremos visualizar los cambios y en el `src`, antes de ser compilados en la carpeta `build`.

## Archivos finales para el upload del proyecto

- `index.html`: Es donde tenemos el código fuente de la página en HTML.
- Carpeta `video`: Es donde almacenamos nuestro video de la sección header.
- Carpeta `build`: Es donde están cargados los archivos CSS y JS comprimidos para un mejor rendimiento, también imágenes en distintos formatos.
