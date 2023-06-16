import { Link } from "react-router-dom";
import { profile } from '../assets';

const ArtistDetailsHeader = ( artistData ) => {
// console.log(artistData);
// console.log(artistData.artists[0].images[0].url)
// console.log(songData.tracks[0]);
console.log(artistData.artistData.data);
//console.log(artistData.artistData.data.artist.profile.name);
//console.log(artistData.artistData.data.artist.profile.biography.text);
//console.log(artistData.artistData.data.artist.visuals.avatarImage.sources[0].url);
// console.log(ArtistData[0]?.ArtistData);
//console.log(artistId);
return (
  <div className="relative w-full flex flex-col">
    <div className= "w-full bg-gradient-to-1 from-transparent to-black sm:h-48 h-28"/>

    <div className="absolute inset-0 flex items-center">
      <img
      alt="alt"
      src={artistData.artistData.data.artist.visuals.avatarImage === null ? profile
        : artistData.artistData.data.artist.visuals.avatarImage.sources[0].url.replace('{w}','500').replace('{h}','500') 
      }
      className="sm:w-48 w-28 sm:h-48 h-28 rounded-full
      object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5">
        <p className="font=bold sm:text-3xl text-xl text-white">
        {artistData.artistData.data.artist.profile.name}
        </p>

        <p className="text-base text-gray-200 mt-2">
         Followers: {artistData.artistData.data.artist.stats.followers}
        </p>
        <p className="text-base text-gray-200 mt-2">
         Monthly Listeners: {artistData.artistData.data.artist.stats.monthlyListeners}
        </p>
      </div>
    </div>

    <div className="w-full sm:h-44 h-24"/>
  </div>
);
};
export default ArtistDetailsHeader;
