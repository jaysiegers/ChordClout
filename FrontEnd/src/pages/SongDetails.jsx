import { useParams } from "react-router-dom";
import { SongDetailsHeader, Error, Loader } from "../components";

import { useGetSongsByIDQuery, useGetSongLyricsByIDQuery } from "../redux/services/Spotify23";

const SongDetails = () => {
    const { songid } = useParams();
    const { data: songData, isFetching, error } = useGetSongsByIDQuery(songid);
    const { data: lyricsData, isFetching: lyricsIsFetching, error: lyricserror} = useGetSongLyricsByIDQuery(songid);

    if (isFetching || lyricsIsFetching) return <Loader title="Loading song details..." />;
    if (error || lyricserror) return <Error />;

    console.log(songData?.tracks[0].album.images[0].url)
    console.log(songData);
    console.log(lyricsData.lyrics.lines);

    return (
        <div className=" flex flex-col">
            <SongDetailsHeader SongData= {songData} />
            <div className="mb-10">
                <h2 className="text-white text-3xl
                font-bold ">Lyrics:
                </h2>

                <div className="mt-5">
                    {lyricsData?.lyrics.fullscreenAction === 'FULLSCREEN_LYRICS'
                    ? lyricsData?.lyrics.lines.map((line, i) => (
                    <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">{lyricsData?.lyrics.lines[i].words}</p>
                    ))
                    : (
                    <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
            )}
        </div>
            </div>
        </div>

    )
}

export default SongDetails;
