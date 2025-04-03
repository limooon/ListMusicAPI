import React, { useState } from "react";

export const ListaCanciones = ({ cancionesSeleccionadas, crearPlaylist }) => {
  const [nombrePlaylist, setNombrePlaylist] = useState("");

  return (
    <div className="lista-canciones">
      <h2>Lista de Canciones</h2>
      <ul>
        {cancionesSeleccionadas.length > 0 ? (
          cancionesSeleccionadas.map((cancion) => (
            <li key={cancion.id} className="track-card">
              <img src={cancion.album.images[0]?.url} alt={cancion.name} width="50" />
              <div>
                <p>{cancion.name}</p>
                <p><strong>Artista:</strong> {cancion.artists[0]?.name}</p>
              </div>
            </li>
          ))
        ) : (
          <p>No hay canciones en la lista</p>
        )}
      </ul>

      <div className="playlist-creator">
        <input
          type="text"
          placeholder="Nombre de la playlist"
          value={nombrePlaylist}
          onChange={(e) => setNombrePlaylist(e.target.value)}
        />
        <button onClick={() => crearPlaylist(nombrePlaylist)}>Crear Playlist</button>
      </div>
    </div>
  );
};
