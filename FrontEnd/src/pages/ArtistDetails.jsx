import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArtistDetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistByIDQuery } from '../redux/services/Spotify23';

const ArtistDetails = () => {
  const { artistid } = useParams();
  const { data: artistData, isFetching, error } = useGetArtistByIDQuery(artistid);
  
  console.log(artistData)
  if (isFetching) return <Loader title="Loading artist..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <ArtistDetailsHeader
        artistData={artistData}
      />
      <div className="mb-10">
                <h2 className="text-white text-3xl
                font-bold ">Biography
                </h2>
                <div className="mt-5">
                    {artistData.data.artist.profile.biography.text
                    ?
                    <p className="text-gray-400 text-base my-1">{artistData.data.artist.profile.biography.text}</p>
                    :
                    <p className="text-gray-400 text-base my-1">Sorry, No biography found!</p>
                    }
                </div>
            </div>


      {/* <RelatedSongs
        data={artistData?.data[0].views['top-songs']?.data}
        artistId={artistid}
        isPlaying={isPlaying}
        activeSong={activeSong}
      /> */}
    </div>
  );
};

export default ArtistDetails;