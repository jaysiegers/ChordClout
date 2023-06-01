import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetSongsByIDQuery } from '../redux/services/Spotify23';

const SearchCard = ({id, song, isPlaying, activeSong, i}) => {
  //const { data } = useGetSongsByIDQuery(id);

  const dispatch = useDispatch ();
  
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));

  };

  console.log(data)
  console.log(id)

  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg curser-pointer">
    <div className="relative w-full h-56 group"> 
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
      ${activeSong?.track === data.tracks[0] ? 'flex bg-black bg-opacity-70' :'hidden'}
      `}> 
        <PlayPause 
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
      <img alt="song_img" src={data.tracks[0].album.images[0].url}/>
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        <Link to={`/songs/${data?.tracks[0].id}`}>
        {data.tracks[0].name}
        </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        <Link to={data.tracks[0].artists[0].name ? `/artists/${data?.tracks[0].artists[0]?.id}` : '/top-artists'}>
        {data.tracks[0].artists[0]?.name}
        </Link>
      </p>

    </div>
  </div>
  );
  };

export default SearchCard;