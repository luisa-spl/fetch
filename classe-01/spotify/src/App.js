import React, {useState} from 'react';
import './App.css';

import getSpotifyToken from "./utils/getSpotifyToken";
import Card from "./components/cards";

const baseURL = (pesquisa) =>
  `https://api.spotify.com/v1/search?q=${pesquisa}&type=track&limit=10`;

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [tracks, setTracks] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erros, setErros] = useState();
  const [nadaEncontrado, setNadaEncontrado] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();

    if(!pesquisa){
      return;
    }

    setErros("");
    setCarregando(true);
    setNadaEncontrado(false);

    try{
      const token = await getSpotifyToken();
      

      const response = await fetch(baseURL(pesquisa), {
        headers: {
          Authorization: token
        }
      });

      const { tracks } = await response.json();

      if(tracks.items.length !== 0){
        setTracks(tracks.items);
      }else{
        setNadaEncontrado(true);
        setTracks([]);
      }
    } catch (error) {
      setErros(error.message);
      setTracks([]);
    }
    setCarregando(false);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' value={pesquisa} onChange={(e) => setPesquisa(e.target.value)}/>
      </form>
      {carregando && <span className="carregando">carregando...</span>}
      {erros && <span className="erros">{erros}</span>}
      {nadaEncontrado && <span className="nada-encontrado">Sua busca não retornou nenhum resultado</span>}
      {tracks.map((track) => (
        <Card track={track} />
      ))}
      
    </div>
  );
}

export default App;
