# API de Lista de Tareas (To-Do List)

Esta API sirve como backend para una aplicación de lista de tareas (To-Do List). Permite a los usuarios administrar sus listas de tareas, tareas individuales y la gestión de usuarios. La API está construida en Node.js y utiliza MongoDB como base de datos.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENCE.txt) para obtener más detalles.

## Instalación de Node Modules

Para usar esta API en tu entorno local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Oscar-UG/Tareas-Capitalinas-api.git
   ```

2. Ve al directorio del proyecto:

   ```bash
   cd Tareas-Capitalinas-api
   ```

3. Instala las dependencias utilizando npm:

   ```bash
   npm install
   ```

## Uso de la API

La API proporciona las siguientes funcionalidades:

- Crear, editar, eliminar y listar listas de tareas.
- Crear, editar, eliminar y listar tareas dentro de las listas.
- Registro y autenticación de usuarios.
- Actualización y eliminación de perfiles de usuario.

### Cómo Consumir la API

Puedes consumir la API utilizando herramientas como [Tareas Capitalinas Documnetacion en Postman](https://documenter.getpostman.com/view/21028946/2s9YR6aDrs) o realizar solicitudes HTTP directamente. A continuación, se muestran ejemplos de cómo usar la API:

- Para obtener todas las listas de tareas:

  ```
  Método: GET
  Ruta: /api/lists
  ```

- Para crear una nueva lista de tareas:

  ```
  Método: POST
  Ruta: /api/lists
  Parámetros del cuerpo de la solicitud: 
    { 
        "title": "Mi Nueva Lista" 
    }
  ```

- Para obtener todas las tareas:

  ```
  Método: GET
  Ruta: /api/tasks
  ```

- Para crear una nueva tarea:

  ```
  Método: POST
  Ruta: /api/tasks
  Parámetros del cuerpo de la solicitud: 
    { 
        "title": "Nueva Tarea", 
        "description": "Descripción de la tarea", 
        "listId": "ID-de-la-lista" 
    }
  ```

- Para registrarse como un nuevo usuario:

  ```
  Método: POST
  Ruta: /api/register
  Parámetros del cuerpo de la solicitud: 
    { 
        "username": "NuevoUsuario", 
        "password": "ContraseñaSegura" 
    }
  ```

- Para iniciar sesión:

  ```
  Método: POST
  Ruta: /api/login
  Parámetros del cuerpo de la solicitud: 
  { 
    "username": "TuNombreDeUsuario", 
    "password": "TuContraseña" 
  }
  ```

  ## Igualmente toda la documentacion de hacer las peticiones, esta en postman

### Propósito de la API

La API está diseñada para proporcionar una funcionalidad completa para la gestión de listas de tareas, tareas y usuarios. Puedes utilizarla como backend para tu propia aplicación de lista de tareas o como punto de partida para otros proyectos que requieran una API RESTful.

## Contribución

Si deseas contribuir a este proyecto, ¡estamos abiertos a colaboraciones! Por favor, sigue las mejores prácticas de desarrollo y envía tus contribuciones a través de solicitudes de extracción.

## Contacto

Si tienes preguntas o necesitas ayuda, no dudes en contactarnos a través de [jmoya396@gmail.com].

---

[¡Visita nuestro sitio web!](https://jhoseb29.github.io/Jose-Moya/)
```

