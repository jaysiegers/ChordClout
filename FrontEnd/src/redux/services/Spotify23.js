import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotify23API = createApi({
  reducerPath: 'spotify23API',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '3e495d322dmsh71f9e322caea807p107f44jsnf3993f84648f');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTodaysHits: builder.query({ query: () => '/playlist_tracks/?id=37i9dQZF1DXcBWIGoYBM5M&offset=0&limit=100'}),
    getSongsBySearch: builder.query({query: (searchTerm) => `/search/?q=${searchTerm}&type=multi&limit=4`}),
    getSongsByID: builder.query({query: (songid) => `/tracks/?id=${songid}`}),
    getSongLyricsByID: builder.query({query: (songid) => `/track_lyrics/?id=${songid}`}),
    getPlaylistTracksByID: builder.query({query: (playlistid) => `/playlist_tracks/?id=${playlistid}`}),
    getPlaylistByID: builder.query({query: (playlistid) => `/playlist/?id=${playlistid}`}),
    getArtistByID: builder.query({query: (artistid) => `/artist_overview/?id=${artistid}`}),
  }),
});

export const {
  useGetTodaysHitsQuery,
  useGetSongsBySearchQuery,
  useGetSongsByIDQuery,
  useGetSongLyricsByIDQuery,
  useGetPlaylistTracksByIDQuery,
  useGetPlaylistByIDQuery,
  useGetArtistByIDQuery,
} = spotify23API