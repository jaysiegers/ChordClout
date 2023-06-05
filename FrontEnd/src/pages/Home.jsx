import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Error, Loader, PlaylistCard } from "../components"

import { useGetPlaylistByIDQuery } from "../redux/services/Spotify23";

import {collection, query, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";

const Home = () => {
  const [user, loading, errorauth] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const userdata = doc.docs[0].data();
      setName(userdata.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
    
  useEffect(() => {

    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserName();
  });
    
    const { data: todayshitsdata, isFetching, error } = useGetPlaylistByIDQuery('37i9dQZF1DXcBWIGoYBM5M');
    const { data: viralhitsdata, isFetching: isFetching1, error: error1 } = useGetPlaylistByIDQuery('37i9dQZF1DX2L0iB23Enbq');
    const { data: newreleasedata, isFetching: isFetching2, error2 } = useGetPlaylistByIDQuery('37i9dQZF1DX4JAvHpjipBk');
    const { data: softpophitsdata, isFetching: isFetching3, error: error3 } = useGetPlaylistByIDQuery('37i9dQZF1DWTwnEm1IYyoj');

    if(isFetching || isFetching1 || isFetching2 || isFetching3) return <Loader title="Loading songs..." />;

    if(error || error1 || error2 || error3) return <Error />;

    const playlistdata = [ todayshitsdata, newreleasedata, softpophitsdata, viralhitsdata ];

    console.log( playlistdata );

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center 
            sm:flex-row flex-col mt-4 mb-10">
                <div className="font-bold text-3xl
                 text-white">Welcome, {name}</div>
            </div>

            <div className="flex flex-wrap 
            sm:justify-start justify-center gap-8">
                {playlistdata.map((playlist, i) => (
                    <PlaylistCard
                    key={playlist.key}
                    playlist={playlist}
                    data={playlistdata}
                    i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;