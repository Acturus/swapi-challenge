### Proyecto StarWars API

¡Bienvenido al proyecto StarWars API! 🚀

#### Tecnologías Utilizadas

Este proyecto ha sido desarrollado con las siguientes tecnologías y herramientas:

- **Serverless Framework:** Desarrollo y despliegue eficiente de servicios en la nube.
- **TypeScript:** Lenguaje de programación tipado que mejora la calidad y mantenimiento del código.
- **Express:** Marco de aplicación web para Node.js, proporcionando una base robusta para construir servicios RESTful.
- **Express Validator:** Middleware para validación de datos de entrada en las solicitudes HTTP.
- **Tsyringe:** Contenedor de inversión de control para la implementación de arquitectura en capas.

#### Almacenamiento de Datos

La aplicación utiliza Amazon DynamoDB como base de datos para almacenar información de los personajes que se agreguen.

#### Swagger

La documentación de la API está implementada con Swagger y se puede acceder a ella mediante la ruta `/api/v1/docs/`. Aunque actualmente está presentando unos inconvenientes mostrando los endpoint existentes, por lo tanto se detallan más abajo.

#### Descripción de Endpoints

1. **Listar Personajes:**
   - **Endpoint:** `/api/v1/characters/list`
   - **Descripción:** Este endpoint lista todos los personajes, con la opción de filtrar por fuente de datos (swapi o local) mediante el parametro get 'source'

2. **Agregar Personaje:**
   - **Endpoint:** `/api/v1/characters/add`
   - **Descripción:** Agrega un nuevo personaje a la base de datos local, proporcionando los siguientes datos en el cuerpo de la solicitud:
     - `nombre` (mínimo 5 caracteres)
     - `color_ojos` (mínimo 3 caracteres)
     - `color_piel` (mínimo 3 caracteres)
     - `color_cabello` (mínimo 3 caracteres)
     - `fecha_nacimiento` (mínimo 4 caracteres)
     - `estatura` (número mayor o igual a 0)
     - `peso` (número mayor o igual a 0)
     - `genero` (male, female, n/a)

3. **Obtener Vehículo Específico:**
   - **Endpoint:** `/api/v1/vehicles/:id`
   - **Descripción:** Este endpoint proporciona información detallada sobre un vehículo específico, complementando la información disponible para los personajes.

#### Instrucciones para Levantar el Proyecto

Para levantar el proyecto en tu máquina, sigue estos pasos:

1. **Configura AWS CLI:** Asegúrate de tener configurada la AWS CLI en tu máquina con las credenciales adecuadas.

2. **Instala Dependencias:** Ejecuta `npm install` en la terminal para instalar todas las dependencias necesarias.

3. **Deploy con Serverless:** Utiliza el comando `serverless deploy --verbose` para desplegar el proyecto en tu entorno. Este comando proporcionará información detallada sobre el proceso de despliegue.

¡Gracias por ser parte de este viaje! ¡Que la fuerza te acompañe! 🌌✨