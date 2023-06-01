import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, PlaylistCard } from "../components"
import { genres } from "../assets/constants"
import { useGetNewReleasesPlaylistQuery, useGetRNBPlaylistQuery, useGetTodaysHitsPlaylistQuery, useGetPlaylistByIDQuery } from "../redux/services/Spotify23";

const Home = () => {
    const dispatch = useDispatch();
    const {activePlaylist, isPlaying} = useSelector((state) => state.player);
    const { data: todayshitsdata, isFetching: isFetching1, error: error1 } = useGetTodaysHitsPlaylistQuery();
    const { data: rnbdata, isFetching: isFetching2, error: error2 } = useGetRNBPlaylistQuery();
    const { data: newreleasedata, isFetching, error } = useGetNewReleasesPlaylistQuery();
    
    //const genreTitle = "R&B";

    if(isFetching || isFetching1 || isFetching2) return <Loader title="Loading songs..." />;

    if(error, error1, error2) return <Error />;

    const playlistdata = [ todayshitsdata, newreleasedata, rnbdata];

    console.log( playlistdata );

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center 
            sm:flex-row flex-col mt-4 mb-10">
                <div className="font-bold text-3xl
                 text-white">Home</div>
            </div>

            <div className="flex flex-wrap 
            sm:justify-start justify-center gap-8">
                {playlistdata.map((playlist, i) => (
                    <PlaylistCard
                    key={playlist.key}
                    playlist={playlist}
                    isPlaying={isPlaying}
                    data={playlistdata}
                    i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;