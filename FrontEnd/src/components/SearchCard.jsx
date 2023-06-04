import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import { Error, Loader } from '../components';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

import { useGetSongsByIDQuery } from '../redux/services/Spotify23';

const SearchCard = ({song, isPlaying, activeSong, i}) => {
  const { data: songData, isFetching, error } = useGetSongsByIDQuery(song?.data.id);

  const dispatch = useDispatch ();
  
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));

  };

  if (isFetching) return <Loader title="Loading results" />;

  if (error) return <Error />;

  console.log(songData.tracks)
  console.log(songData.tracks[0].album)
  // console.log(song)

  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg curser-pointer">
    <div className="relative w-full h-56 group"> 
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
      ${activeSong?.track === songData.tracks[0] ? 'flex bg-black bg-opacity-70' :'hidden'}
      `}> 
        <PlayPause 
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
      <img alt="song_img" src={songData.tracks[0].album.images[0].url}/>
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        <Link to={`/songs/${songData?.tracks[0].id}`}>
        {songData.tracks[0].name}
        </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        <Link to={songData.tracks[0].artists[0].name ? `/artists/${songData?.tracks[0].artists[0]?.id}` : '/top-artists'}>
        {songData.tracks[0].artists[0]?.name}
        </Link>
      </p>

    </div>
  </div>
  );
  };

export default SearchCard;