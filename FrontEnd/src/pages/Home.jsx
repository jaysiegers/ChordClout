import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, PlaylistCard } from "../components"
import { genres } from "../assets/constants"
import { useGetRNBPlaylistQuery } from "../redux/services/Spotify23";
import { useGetTodaysHitsPlaylistQuery } from "../redux/services/Spotify23";

const Home = () => {
    const dispatch = useDispatch();
    const {activePlaylist, isPlaying} = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetRNBPlaylistQuery();
    const playlistdata = [data]
    //const genreTitle = "R&B";

    console.log(data);

    if(isFetching) return <Loader title="Loading songs..." />;

    if(error) return <Error />;

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center 
            sm:flex-row flex-col mt-4 mb-10">
                <div className="font-bold text-3xl
                 text-white">Home</div>
            </div>

            <div className="flex flex-wrap 
            sm:justify-start justify-center gap-8">
                {playlistdata.map((playlist) => (
                    <PlaylistCard
                    key={playlist.key}
                    playlist={playlist}
                    isPlaying={isPlaying}
                    playlistdata={playlistdata}
                    //i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;