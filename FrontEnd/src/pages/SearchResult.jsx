import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';

import { Error, Loader, ArtistCard, SearchCard, Profile } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/Spotify23';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const SearchResult = () => {
  const [user, loading, errorauth] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/login");
  });
  
  const {searchTerm} = useParams();
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) return <Loader title="Loading results" />;

  if (error) return <Error />;

  console.log(data)

  return (
    <div className="flex flex-col">
      <Profile/>
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing song results for <span className="font-black">{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.items.map(( song, i) => (
          <SearchCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>

      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing artist results for <span className="font-black">{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.artists?.items.map(( artist ) => (
          <ArtistCard
            key={artist.key}
            artist={artist}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;