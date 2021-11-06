# Enunciado de la prueba técnica

En Centribal necesitamos implementar una página web donde se muestre el listado de todos los superhéroes que están en nómina.

El acceso a los datos se hace mediante peticiones a una API REST que también se debe construir y debe tener el siguiente formato:
- Petición 1:
  - Method: GET
  - URL: http://<ip>:<port>/api/v1/test/superheroes
  - Descripción: Devuelve una lista de superhéroes de acuerdo al parámetro opcional query string: puedeVolar que puede ser true o false

- Petición 2:
  - Method: GET
  - URL: http://<ip>:<port>/api/v1/test/superheroes/<id>
  - Descripción: Devuelve un superhéroe de acuerdo el id enviado

Formato de la respuesta del API REST:
```
{
  "data": [
    {
      "id": 3,
      "nombre": "Wonder Woman",
      "puedeVolar": true,
      "nombreReal": "Diana Prince",
      "avatarURL": "https://<ip>:<port>/image1.png"
    },
    {
      "id": 4,
      "nombre": "Iron Man",
      "puedeVolar": true,
      "nombreReal": "Tony Stark",
      "avatarURL": "https://<ip>:<port>/image2.png"
    },
    {
      "id": 5,
      "nombre": "Superman",
      "puedeVolar": true,
      "nombreReal": "Clark Kent",
      "avatarURL": "https://<ip>:<port>/image3.png"
    }
  ]
}
```

Vistas a implementar:
- Vista de todos los superhéroes. El paginado se valorará si la API REST devuelve muchos.
- Vista de la información de un solo superhéroe.
- Vista que muestra todos los superhéroes que pueden volar.
- Se debe implementar un buscador por el atributo “nombre” que filtre desde el mismo frontend los elementos ya obtenidos.

Si la lista de superhéroes no posee elementos o alguna de las peticiones falla, debe mostrar un mensaje de error en la vista (No utilizar alert).

Necesitamos que la aplicación se construya con REACT. Se valorará que se haya tenido en cuenta el desarrollo con Arquitectura Hexagonal y DDD. También se valorará que el desarrollo contenga tests unitarios y que el proyecto se pueda levantar con Docker. Dejamos a tu elección la estética de la web para que puedas exponer toda tu creatividad.

El entregable debe ser una Pull Request a la rama main del proyecto, de tal manera que nuestro equipo de desarrollo valore tu trabajo y en la posterior entrevista podamos conversar acerca de cómo y por qué has tomado determinadas decisiones. El entregable debe contener las instrucciones de instalación así como las instrucciones para acceder a los servicios API REST y carga de la propia web.

Muchas gracias por tu tiempo.

Paso 1: Instalar json-server
npm i -g json-server 
Paso: 2: Desde la raiz del proyecto ejecutar el comando npm install
Paso 3: Ejecutar el siguiente comando desde la raiz del proyecto
json-server --watch json-server/data.json
Paso 4: Abrir otra consola en la raiz del proyecto y ejecutar npm start
Paso 5: Cuando la consola se lo pida presione la tecla "y"





