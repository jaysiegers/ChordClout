import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotify23API = createApi({
  reducerPath: 'spotify23API',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '82921621d9msh86fa7c942990bfep1ca700jsnabd1b879902f');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTodaysHits: builder.query({ query: () => '/playlist_tracks/?id=3mMZ3xGAURyJ71YSpVcGCK&offset=0&limit=100'}),
    getRNBPlaylist: builder.query({query: () => '/playlist/?id=37i9dQZF1EQoqCH7BwIYb7'}),
    getTodaysHitsPlaylist: builder.query({query: () => '/playlist/?id=37i9dQZF1DXcBWIGoYBM5M'}),
    getNewReleasesPlaylist : builder.query({query: () => '/playlist/?id=37i9dQZF1DX4JAvHpjipBk'}),
    getSongsBySearch: builder.query({query: ({searchTerm}) => `/search/?q=${searchTerm}&type=tracks`}),
    getSongsByID: builder.query({query: ({songid}) => `/tracks/?id=${songid}`}),
    getPlaylistTracksByID: builder.query({query: ({playlistid}) => `/playlist_tracks/?id=${playlistid}`}),
    getPlaylistByID: builder.query({query: (playlistid) => `/playlist/?id=${playlistid}`}),
    getArtistByID: builder.query({query: ({artistid}) => `/artists/?id=${artistid}`}),
  }),
});

export const {
  useGetTodaysHitsQuery,
  useGetRNBPlaylistQuery,
  useGetTodaysHitsPlaylistQuery,
  useGetNewReleasesPlaylistQuery,
  useGetSongsBySearchQuery,
  useGetSongsByIDQuery,
  useGetPlaylistTracksByIDQuery,
  useGetPlaylistByIDQuery,
  useGetArtistByIDQuery,
} = spotify23API;