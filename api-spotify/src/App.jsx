import React, { useState } from "react";
import { BarraSerch } from "./componentes/BarraSerch";
import { ListaCanciones } from "./componentes/ListaCanciones";
import { ResultadosSerch } from "./componentes/ResultadosSerch";
import { ListaReproducion } from "./componentes/ListaReproducion";

function App() {
  const [resultados, setResultados] = useState([]);
  const [cancionesSeleccionadas, setCancionesSeleccionadas] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const agregarAColeccion = (cancion) => {
    if (!cancionesSeleccionadas.find((track) => track.id === cancion.id)) {
      setCancionesSeleccionadas([...cancionesSeleccionadas, cancion]);
    }
  };

  const crearPlaylist = (nombre) => {
    if (nombre.trim() !== "" && cancionesSeleccionadas.length > 0) {
      setPlaylists([...playlists, { nombre, canciones: cancionesSeleccionadas }]);
      setCancionesSeleccionadas([]);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mi Aplicación de Spotify</h1>
      </header>
      <main className="app-main">
        <BarraSerch setResultados={setResultados} />
        <div className="app-content">
          <ResultadosSerch canciones={resultados} agregarAColeccion={agregarAColeccion} />
          <ListaCanciones cancionesSeleccionadas={cancionesSeleccionadas} crearPlaylist={crearPlaylist} />
          <ListaReproducion playlists={playlists} />
        </div>
      </main>
    </div>
  );
}

export default App;
