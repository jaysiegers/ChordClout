import React from 'react';
import { useNavigate } from 'react-router-dom';
import { profile } from '../assets';

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  console.log(artist);

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${artist?.data.uri.replace("spotify:artist:","")}`)}
    >
      <img alt="song_img" src=
      {
        artist?.data.visuals.avatarImage === null ? profile
       : artist?.data.visuals.avatarImage.sources[0].url
       } 
       className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {artist?.data.profile.name}
      </p>
    </div>
  );
};

export default ArtistCard;