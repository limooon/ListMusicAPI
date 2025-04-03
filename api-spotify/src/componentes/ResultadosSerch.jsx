

import React from "react";

export const ResultadosSerch = ({ canciones, agregarAColeccion }) => {
  return (
    <div className="resultados-serch">
      <h2>Resultados de Búsqueda</h2>
      <ul>
        {canciones.length > 0 ? (
          canciones.map((cancion) => (
            <li key={cancion.id} className="track-card">
              <img src={cancion.album.images[0]?.url} alt={cancion.name} width="50" />
              <div>
                <p>{cancion.name}</p>
                <p><strong>Artista:</strong> {cancion.artists[0]?.name}</p>
                <p><strong>Álbum:</strong> {cancion.album.name}</p>
              </div>
              <button onClick={() => agregarAColeccion(cancion)}>Agregar a Playlist</button>
            </li>
          ))
        ) : (
          <p>No hay resultados</p>
        )}
      </ul>
    </div>
  );
};


