import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {

// console.log(artistData);
// console.log(artistData.artists[0].images[0].url)
// console.log(songData);
//console.log(artistId);
return (
  <div className="relative w-full flex flex-col">
    <div className= "w-full bg-gradient-to-1 from-transparent to-black sm:h-48 h-28"/>

    <div className="absolute inset-0 flex items-center">
      <img
      alt="alt"
      src=
      {
       artistId ? artistData?.artists[0].images[0].url.replace('{w}','500').replace('{h}','500')
       : 
      songData?.tracks[0].album.images[0].url
      }
      className="sm:w-48 w-28 sm:h-48 h-28 rounded-full
      object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5">
        <p className="font=bold sm:text-3xl text-xl text-white">
        {artistId ? artistData?.artists[0].name : songData?.tracks[0].name}
        </p>
        {!artistId && (
          <Link to={'/artists/${songData?.artists[0].id}'}>
          <p className="text-base text-gray-400 mt-2">
            {songData?.tracks[0].artists[0].name}
          </p>
          </Link>
        )}

        <p className="text-base text-gray-400 mt-2">
          {artistId
          ? artistData.artists[0].genres[0]
          : songData?.tracks[0].popularity
          }
        </p>
      </div>
    </div>

    <div className="w-full sm:h-44 h-24"/>
  </div>
);
};
export default DetailsHeader;
