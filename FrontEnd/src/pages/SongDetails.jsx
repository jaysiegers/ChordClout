import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { SongDetailsHeader, Error, Loader } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongsByIDQuery } from "../redux/services/Spotify23";

const SongDetails = () => {
    const dispatch = useDispatch;
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching, error } = useGetSongsByIDQuery(songid);

    //console.log(songData.tracks[0]);

    if (isFetching) return <Loader title="Loading song details..." />;
    if (error) return <Error />;

    console.log(songData?.tracks[0].album.images[0].url)
    console.log(songData);

    return (
        <div className=" flex flex-col">
            <SongDetailsHeader SongData= {songData} />
            <div className="mb-10">
                <h2 className="text-white text-3xl
                font-bold ">Lyrics:
                </h2>

                <div className="mt-5">
                    {/* {songData?.sections[1].type === 'LYRICS'
                    ? songData?.sections[1]?.text.map((line, i) => (
                    <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">{line}</p>
                    ))
                    : ( */}
                    <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
                    {/* )} */}
                </div>
            </div>
        </div>

    )
}

export default SongDetails;
