import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';


import { useGetArtistByIDQuery } from '../redux/services/Spotify23';

const ArtistDetails = () => {
  const { id: artistid } = useParams();

  const { data: artistData, isFetching, error } = useGetArtistByIDQuery({artistid});

  if (isFetching) return <Loader title="Loading artist..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistid}
        artistData={artistData}
      />

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