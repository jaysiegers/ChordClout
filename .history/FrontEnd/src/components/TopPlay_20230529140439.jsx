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

  useEffect(() => {
    divRef.current.scrollIntoView({behavior: 'smooth'});
  }, []);

  const topPlays = data.track?.Slice(0,5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));

  };

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2> Top Charts </h2>
          <Link to="/top-charts"></Link>
            <p> See more</p>

        </div>

      </div>

    </div>
  );
};

export default TopPlay;