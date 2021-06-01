import React, {useRef, useEffect, useState} from "react";
import getAlbumCover from "../utils/getAlbumCover";
import getArtistsNames from "../utils/getArtistsName";

function Card({ track }) {
  const { name, album, external_urls, artists, preview_url } = track;
  const audioRef = useRef();
  const [estaTocando, setEstaTocando] = useState(false);

  useEffect(() => {
    if(estaTocando){
      audioRef.current.play();
      }else{
        audioRef.current.pause();
      }
  }, [estaTocando]);

  function handleImgClick(){
    audioRef.current.volume = 0.2;
    setEstaTocando(!estaTocando)
  }

  return (
    <div className="card">
      <img src={getAlbumCover(album)} alt={`${name} album cover`} onClick={handleImgClick} />
      <b>{name}</b>- {getArtistsNames(artists)}
      <audio ref={audioRef} src={preview_url}/>
    </div>
  );
}

export default Card;