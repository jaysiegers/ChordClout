import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, PlaylistCard } from "../components"

import { useGetPlaylistByIDQuery } from "../redux/services/Spotify23";

const Home = () => {
    const {isPlaying} = useSelector((state) => state.player);
    const { data: todayshitsdata, isFetching, error } = useGetPlaylistByIDQuery('37i9dQZF1DXcBWIGoYBM5M');
    const { data: viralhitsdata, isFetching: isFetching1, error: error1 } = useGetPlaylistByIDQuery('37i9dQZF1DX2L0iB23Enbq');
    const { data: newreleasedata, isFetching: isFetching2, error2 } = useGetPlaylistByIDQuery('37i9dQZF1DX4JAvHpjipBk');
    const { data: softpophitsdata, isFetching: isFetching3, error: error3 } = useGetPlaylistByIDQuery('37i9dQZF1DWTwnEm1IYyoj');

    if(isFetching || isFetching1 || isFetching2 || isFetching3) return <Loader title="Loading songs..." />;

    if(error || error1 || error2 || error3) return <Error />;

    const playlistdata = [ todayshitsdata, newreleasedata, softpophitsdata, viralhitsdata ];

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