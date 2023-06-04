import React from 'react';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';

import { Error, Loader, SongCard, SearchCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/Spotify23';

const SearchResult = () => {
  const {searchTerm} = useParams();
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // const songs = data?.tracks?.hits?.map((song) => song.track);
  //const songs = data?.tracks?.map((song) => song.items);
  //const songs = data?.tracks?.items.map();

  if (isFetching) return <Loader title="Loading results" />;

  if (error) return <Error />;

  // console.log(data?.tracks?.items[0].data?.id)
  console.log(data?.tracks?.items)
  console.log(data)

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          /> */}
        {data?.tracks?.items?.map((songid, song, i) => (
          <SearchCard
            songid={data?.tracks?.items[i].data.id}
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;