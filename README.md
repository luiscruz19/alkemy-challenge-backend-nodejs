ENDPOINTS:
    MOVIES:
        GET /api/movies - Recupera todas las peliculas (Deberá mostrar solamente los campos imagen, título y fecha de creación.)
        GET /api/movies/:id - Devolverá todos los campos de la película o serie junto a los personajes asociados a la misma
        POST /api/movies - Permitira crear una nueva pelicula
            BODY = {
                titulo: 'Nombre de la pelicula',
                fecha_creacion: '2021-05-21',
                imagen: 'https://google.com.ar/images/imagen_de_la_pelicula.png',
                calificacion: 2,
                token: 'Token de autorizacion devuelto en el login'
            }
        PUT /api/movies/:id - Permitira modificar los datos de una pelicula
        DELETE /api/movies/:id - Permitira eliminar una pelicula
        -------------------------------------------------------------------------------------------------------------------------------
        BUSCAR Y ORDENAR PELICULAS
        GET /movies?name=nombre
        GET /movies?genre=idGenero
        GET /movies?order=ASC | DESC
        