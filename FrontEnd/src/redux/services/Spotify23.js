import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotify23API = createApi({
  reducerPath: 'spotify23API',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'bce11a7276mshef7c23547ed78bep11d165jsn1288cd733d5e');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTodaysHits: builder.query({ query: () => '/playlist_tracks/?id=3mMZ3xGAURyJ71YSpVcGCK&offset=0&limit=100'}),
    getRNBPlaylist: builder.query({query: () => '/playlist/?id=37i9dQZF1EQoqCH7BwIYb7'}),
    getTodaysHitsPlaylist: builder.query({query: () => '/playlist/?id=37i9dQZF1DXcBWIGoYBM5M'}),
    getNewReleasesPlaylist : builder.query({query: () => '/playlist/?id=37i9dQZF1DX4JAvHpjipBk'}),
    getSongsBySearch: builder.query({query: (searchTerm) => `/search/?q=${searchTerm}&type=tracks`}),
  }),
});

export const {
  useGetTodaysHitsQuery,
  useGetRNBPlaylistQuery,
  useGetTodaysHitsPlaylistQuery,
  useGetNewReleasesPlaylistQuery,
  useGetSongsBySearchQuery,
} = spotify23API;