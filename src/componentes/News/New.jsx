import React, { useState, useEffect } from "react";
import "../../estilos/News/News.css";
import axios from 'axios';

function New() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const getNoticias = async () => {
      const response = await axios.get('http://localhost:4000/api/noticias');
      setNoticias(response.data);
    };
    getNoticias();
  }, []);

  return (
    <div className="contenedor-testimonio">
      {noticias.map((noticia) => (
        <div key={noticia.id} className="contenedor-noticia-individual">
          <div className="contenedor-noticia">
            <p className="nombre-testimonio">{noticia.nameNoticias}</p>
            <p className="cargo-testimonio">{noticia.fechCreacion}</p>
            <p className="texto-testimonio">{noticia.contenidoEng}</p>
            <img
              className="imagen-testimonio"
              src={noticia.img}
              alt="Optimen"
            />
          </div>
        </div>
      ))}
      
    </div>
  );
  
}

export default New; 


