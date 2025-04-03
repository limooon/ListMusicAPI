import React, { useState } from "react";
import { buscarCanciones } from "../../Helpers/Api";

export const BarraSerch = ({ setResultados }) => {
  const [query, setQuery] = useState("");

  const manejarBusqueda = async (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      const resultados = await buscarCanciones(query);
      setResultados(resultados);
    }
  };

  return (
    <form className="search-bar" onSubmit={manejarBusqueda}>
      <input
        type="text"
        placeholder="Buscar..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};
