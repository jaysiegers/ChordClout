import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard} from "../components"
import { genres } from "../assets/constants"
import {selectGenreListId} from '../redux/features/playerSlice';
import { useGetPlaylistTracksByIDQuery } from "../redux/services/Spotify23";

const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong, isPlaying, genreListId} = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetPlaylistTracksByIDQuery( genreListId || '37i9dQZF1EQoqCH7BwIYb7');

    if(isFetching) return <Loader title="Loading songs..." />;

    if(error) return <Error />;

    const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

    return (
        <div className="relative flex">
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center 
            sm:flex-row flex-col mt-4 mb-10">
                <div className="font-bold text-3xl
                 text-white">Discover {genreTitle}</div>
                <select onChange={(e) => dispatch (selectGenreListId(e.target.value))}
                    value={genreListId || 'R&B'}
                    className="bg-black text-gray-300 p-3
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
        </div>
    );
};

export default Discover;