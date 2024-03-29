import { useSelector } from 'react-redux';
<<<<<<< Updated upstream
import { Route, Routes, useNavigate } from 'react-router-dom';
=======
import { Route, Switch } from 'react-router-dom';
>>>>>>> Stashed changes

import { Sidebar, MusicPlayer, Profile, Loader } from './components';
import { ArtistDetails, Discover, Search, SearchResult, SongDetails, Home, Playlist, Login, Register } from './pages';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  const { user } = useAuthState(auth);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#a900b1]">
        <div className="px-6 h-[calc(100vh-0px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
<<<<<<< Updated upstream
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
=======
            <Switch>
>>>>>>> Stashed changes
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/artists/:artistid" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/" element={<Search />} />
              <Route path="/search/result/:searchTerm" element={<SearchResult />} />
              <Route path="/playlist/:playlistid" element={<Playlist />} />
            </Switch>
          </div>
        </div>
      </div>

      {activeSong?.track && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
