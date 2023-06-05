import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Error, Loader, SongCard, Profile} from "../components"
import { genres } from "../assets/constants"
import {selectGenreListId} from '../redux/features/playerSlice';
import { useGetPlaylistTracksByIDQuery } from "../redux/services/Spotify23";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Discover = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, loading, errorauth] = useAuthState(auth);
    const {activeSong, isPlaying, genreListId} = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetPlaylistTracksByIDQuery( genreListId || '37i9dQZF1EQoqCH7BwIYb7');

    useEffect(() => {

        if (loading) return;
        if (!user) return navigate("/login");
      });

    if(isFetching) return <Loader title="Loading songs..." />;

    if(error) return <Error />;

    const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

    return (
        <div className="flex flex-col">
            <Profile/>
            <div className="w-full flex justify-between items-center 
            sm:flex-row flex-col mt-4 mb-10">
                <div className="font-bold text-3xl
                 text-white">Discover {genreTitle}</div>
                <select onChange={(e) => dispatch (selectGenreListId(e.target.value))}
                    value={genreListId || 'R&B'}
                    className="absolute top-10 bg-black text-gray-300 p-3
                    text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre) => <option key={genre.value}
                    value={genre.value}>{genre.title}</option>)}
                </select>
            </div>

            <div className="flex flex-wrap 
            sm:justify-start justify-center gap-8">
                {data.items.map((song, i) => (
                    <SongCard
                    key={song.key}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data.items}
                    i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Discover;