import { useSelector } from "react-redux";

import { Error, Loader, PlaylistCard, Searchbar } from "../components"
import { useGetPlaylistByIDQuery } from "../redux/services/Spotify23";

const Search = () => {
// Hiphop: 37i9dQZF1EQnqst5TRi17F
// Electronic: 37i9dQZF1EIeZKM1YFAtwx
// Pop: 37i9dQZF1EQncLwOalG3K7
// Alternative: 37i9dQZF1DX9GRpeH4CL0S
// Rock: 37i9dQZF1EQpj7X7UK8OOF
// Latin: 37i9dQZF1DXbLMw3ry7d7k
// Film: 37i9dQZF1DXb69UWhjrXsW
// Country: 37i9dQZF1DX1lVhptIYRda
// Worldwide: 37i9dQZEVXbMDoHDwVN2tF
// Reggae: 37i9dQZF1EQpjs4F0vUZ1x
// House: 37i9dQZF1DXd5DCuoVuFY3
// K-pop: 37i9dQZF1DX9tPFwDMOaN1
    const {isPlaying} = useSelector((state) => state.player);
    const { data: hiphopdata, isFetching: isFetching0, error: error0 } = useGetPlaylistByIDQuery('37i9dQZF1EQnqst5TRi17F');
    const { data: popdata, isFetching, error } = useGetPlaylistByIDQuery('37i9dQZF1EQncLwOalG3K7');
    const { data: electronicdata, isFetching: isFetching1, error: error1 } = useGetPlaylistByIDQuery('37i9dQZF1EIeZKM1YFAtwx');
    const { data: rnbdata, isFetching: isFetching2, error: error2 } = useGetPlaylistByIDQuery('37i9dQZF1EQoqCH7BwIYb7');
    // // const { data: alternativedata, isFetching: isFetching3, error: error3 } = useGetPlaylistByIDQuery('37i9dQZF1DX9GRpeH4CL0S');
    // const { data: rockdata, isFetching: isFetching4, error: error4 } = useGetPlaylistByIDQuery('37i9dQZF1EQpj7X7UK8OOF');
    // const { data: latindata, isFetching: isFetching5, error: error5 } = useGetPlaylistByIDQuery('37i9dQZF1DXbLMw3ry7d7k');
    // const { data: filmdata, isFetching: isFetching6, error: error6 } = useGetPlaylistByIDQuery('37i9dQZF1DXb69UWhjrXsW');
    // const { data: countrydata, isFetching: isFetching7, error: error7 } = useGetPlaylistByIDQuery('37i9dQZF1DX1lVhptIYRda');
    // const { data: worldwidedata, isFetching: isFetching8, error: error8 } = useGetPlaylistByIDQuery('37i9dQZEVXbMDoHDwVN2tF');
    // const { data: housedata, isFetching: isFetching9, error: error9 } = useGetPlaylistByIDQuery('37i9dQZF1DXd5DCuoVuFY3');
    // const { data: kpopdata, isFetching: isFetching10, error: error10 } = useGetPlaylistByIDQuery('37i9dQZF1DX9tPFwDMOaN1');
    
    //const genreTitle = "R&B";

    // if(isFetching0 || isFetching || isFetching1 || isFetching2  || isFetching4 
    //   // || isFetching4  || isFetching5 
    //   // || isFetching6 || isFetching7 || isFetching8 || isFetching9 || isFetching10
    //   ) 
    // return <Loader title="Loading songs..." />;

    
    if(isFetching0 || isFetching || isFetching1 || isFetching2) return <Loader title="Loading songs..." />;

    if(error0 || error || error1 || error2 
      // || error4 
    //   // || error4 || error5 || error6 
    //   // || error7 || error8 || error9 || error10
       ) 
       return <Error />;

    const playlistdata = [popdata, hiphopdata, electronicdata, rnbdata
      // alternativedata, latindata, filmdata,
    // countrydata, worldwidedata, housedata, kpopdata 
    ];

    console.log( playlistdata );

    return (
        <div className="flex flex-col">
          <Searchbar/>
            <div className="w-full flex justify-between items-center 
            sm:flex-row flex-col mt-4 mb-10">
                <div className="font-bold text-3xl
                 text-white">Search for songs or artists</div>
            </div>

            <div className="flex flex-wrap 
            sm:justify-start justify-center gap-8">
                {playlistdata.map((playlist, i) => (
                    <PlaylistCard
                    key={playlist.key}
                    playlist={playlist}
                    isPlaying={isPlaying}
                    data={playlistdata}
                    i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Search;