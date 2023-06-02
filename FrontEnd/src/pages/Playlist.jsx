import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components"

import { useGetPlaylistByIDQuery, useGetPlaylistTracksByIDQuery } from "../redux/services/Spotify23";

const Playlist = () => {
    const { playlistid } = useParams();
    console.log(playlistid);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetPlaylistTracksByIDQuery({playlistid});
    const { data: playlistdata, isFetching: isFetchingPlaylist, error: playlistError} = useGetPlaylistByIDQuery({playlistid});

    if(isFetching || isFetchingPlaylist) return <Loader title="Loading songs..." />;

    if(error || playlistError) return <Error />;

    console.log(data);
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center 
            sm:flex-row flex-col mt-4 mb-10">
                <div className="font-bold text-3xl
                 text-white">{playlistdata.name}
                </div>
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

export default Playlist;