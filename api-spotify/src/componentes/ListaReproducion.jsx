import React from "react";

export const ListaReproducion = ({ playlists }) => {
  return (
    <div className="lista-reproducion">
      <h2>Listas de Reproducción</h2>
      {playlists.length > 0 ? (
        playlists.map((playlist, index) => (
          <div key={index} className="playlist-card">
            <h3>{playlist.nombre}</h3>
            <ul>
              {playlist.canciones.map((cancion) => (
                <li key={cancion.id}>
                  <img src={cancion.album.images[0]?.url} alt={cancion.name} width="50" />
                  <div>
                    <p>{cancion.name}</p>
                    <p><strong>Artista:</strong> {cancion.artists[0]?.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No hay listas de reproducción creadas</p>
      )}
    </div>
  );
};

