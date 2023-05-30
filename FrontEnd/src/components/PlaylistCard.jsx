import {Link} from 'react-router-dom';

const PlaylistCard = ({playlist, i,   playlistdata}) => {

  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg curser-pointer">
    <div className="relative w-full h-56 group"> 
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden`}>
      </div>
      <img alt="playlist_img" src= {playlist.images[0].url}/>
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        <Link to={`/playlist/${playlist.name}`}>
        {playlist.name}
        </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        Chord Clout
      </p>

    </div>
  </div>
  );
  };

export default PlaylistCard;