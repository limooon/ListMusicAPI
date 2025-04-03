const clienteID = "";
const clienteSecreto = "";

const obtenerToken = async () => {
  const url = "https://accounts.spotify.com/api/token";
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": "Basic " + btoa(`${clienteID}:${clienteSecreto}`),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error obteniendo token:", error);
  }
};

// Función para buscar canciones
export const buscarCanciones = async (query) => {
  const token = await obtenerToken();
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data.tracks.items; // Retornamos solo la lista de canciones
  } catch (error) {
    console.error("Error obteniendo canciones:", error);
  }
};
