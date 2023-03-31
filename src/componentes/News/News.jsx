import React, { useState, useEffect } from "react";
import "../../estilos/News/News.css"; // Importa los estilos CSS de la sección de noticias
import axios from 'axios'; // Importa la librería Axios para realizar peticiones HTTP
import "../../estilos/News/header.css"; // Importa los estilos CSS del encabezado de la sección de noticias
import { FormattedMessage } from "react-intl"; // Importa la función FormattedMessage de la librería react-intl

function News() {
  // Declara un estado local para almacenar las noticias
  const [noticias, setNoticias] = useState([]);

  // Realiza una petición GET al servidor para obtener las noticias
  useEffect(() => {
    const getNoticias = async () => {
      const response = await axios.get('http://localhost:4000/api/noticias');
      setNoticias(response.data);
    };
    getNoticias();
  }, [noticias]);

  // Declara un estado local para controlar la visibilidad de la traducción de las noticias
  const [showTranslation, setShowTranslation] = useState(false);

  // Función que cambia el estado de la visibilidad de la traducción
  const toggleTranslation = () => setShowTranslation(!showTranslation);

  // Retorna la estructura de la sección de noticias
  return (
    <div className="Header"> // Crea un contenedor principal para la sección de noticias
      <div className="header-contenido"> // Crea un contenedor para el encabezado de la sección de noticias
        <img className="header-image" src={require("../../imagenes/avion.jpg")} alt="Imagen principal de un avión" /> // Crea una imagen para el encabezado de la sección de noticias
        <h1 className="header-titulo"> // Crea un título para el encabezado de la sección de noticias
          <FormattedMessage // Utiliza la función FormattedMessage para obtener el título de la sección de noticias desde un archivo JSON de traducción
            id="app.News"
            defaultMessage="News"
          />
        </h1>
      </div>
      
      {noticias.map((noticia) => ( // Itera sobre el arreglo de noticias y muestra cada una
        <div key={noticia.id} className="contenedor-testimonio" > // Crea un contenedor para cada noticia
          <p className="nombre-testimonio">{noticia.nameNoticias}</p> // Muestra el nombre de la noticia
          <p className="cargo-testimonio">{noticia.fechCreacion}</p> // Muestra la fecha de creación de la noticia
          <p className="texto-testimonio">{showTranslation ? noticia.contenidoEsp : noticia.contenidoEng}</p> // Muestra el contenido de la noticia en español o inglés dependiendo de la visibilidad de la traducción
          <img className="imagen-testimonio" src={noticia.img} alt="Optimen" /> // Muestra la imagen de la noticia
          <button className="ver-traduccion" onClick={toggleTranslation}>{showTranslation ? 'Ver en inglés' : 'Ver en español'}</button> // Muestra un botón para cambiar la visibilidad de la traducción
        </div>
      ))}
    </div>
  );
}

export default News; // Exporta el componente News para ser utilizado en otros componentes

// Autor: Mario Alberto Rangel Márquez
//GDS0451