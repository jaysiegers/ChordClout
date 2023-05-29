import {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper/free';

import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice';
import {useGetTopChartQuery} from '../redux/services/Spotify23';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = () => (
  <div>TopPlay</div>
);

export default TopPlay;
