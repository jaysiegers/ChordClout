import {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';

import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice';
import {useGetTodaysHitsQuery} from '../redux/services/Spotify23';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = () => {
  const dispatch = useDispatch();
  const {activeSong, isPlaying} = useSelector ((state) => state.player);
  const {data} = useGetTodaysHitsQuery ();
  const divRef = useRef(null);

  const topPlays = data.track?.Slice(0,5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));

  };

  return (
    <div ref={divRef}>

    </div>
  );
};

export default TopPlay;