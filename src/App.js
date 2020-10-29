import React, {useEffect, useState } from 'react';
import Login from './components/Login'
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Home from './components/Home'
import {useDataLayerValue} from './DataLayer';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopArtists from './components/TopArtists'
import TopTracks from './components/TopTracks'
import { Route , BrowserRouter as Router } from "react-router-dom";
import RecentlyPlayed from './components/RecentlyPlayed';

const spotify = new SpotifyWebApi();


function App() {


  const [token, setToken] = useState(null);
  const [{user}, dispatch] = useDataLayerValue();

    useEffect(() =>{

    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token){
      dispatch({
        type:'SET_TOKEN',
        token: _token
      })
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then(user =>{
        
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });

      spotify.getMyTopArtists().then(artists => {
        
        dispatch({
          type:'SET_TOPARTISTS',
          topArtists: artists.items
        })
      });

      spotify.getMyTopTracks().then(tracks =>{
        dispatch({
          type:'SET_TOPTRACKS',
          topTracks: tracks.items
        })
      })

      spotify.getMyRecentlyPlayedTracks().then(recent =>{
        
        dispatch({
          type:'SET_RECENTLYPLAYED',
          recentlyPlayed: recent.items
        })
      })

      
      
    }
  },[] )
  
  


  return (
    <div className="app">
       {
        token ? (
          <Router>
            <Route path='/' exact component={Home} />
            <Route path='/artists' component={TopArtists} />
            <Route path='/songs' component={TopTracks} />
            <Route path='/recent' component={RecentlyPlayed} />
          </Router>

        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
