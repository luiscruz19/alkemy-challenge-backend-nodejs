<h1>ENDPOINTS:</h1>
    <h2>MOVIES:</h2>
		<h3>CRUD</h3>
		<ul>
			<li><b>GET</b> <code>/api/movies</code> - Recupera todas las peliculas (Deberá mostrar solamente los campos imagen, título y fecha de creación.)</li>
			<li><b>GET</b> <code>/api/movies/:id</code> - Devolverá todos los campos de la película o serie junto a los personajes asociados a la misma
			<li><b>POST</b> <code>/api/movies</code> - Permitira crear una nueva pelicula
<pre>
BODY = {
	titulo: 'Nombre de la pelicula',
	fecha_creacion: '2021-05-21',
	imagen: 'https://google.com.ar/images/imagen_de_la_pelicula.png',
	calificacion: 2,
	token: 'Token de autorizacion devuelto en el login'
}
</pre>
			</li>
			<li><b>PUT</b> <code>/api/movies/:id</code> - Permitira modificar los datos de una pelicula</li>
			<li><b>DELETE</b> <code>/api/movies/:id</code> - Permitira eliminar una pelicula</li>
		</ul>
		<hr/>
		<h3>BUSCAR Y ORDENAR PELICULAS</h3>
		<ul>
			<li><b>GET</b> <code>/movies?name=nombre</code></li>
			<li><b>GET</b> <code>/movies?genre=idGenero</code></li>
			<li><b>GET</b> <code>/movies?order=ASC | DESC</code></li>
		</ul>
