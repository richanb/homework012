import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState} from "react";
function App() {
  const [playlist,setPlaylist] =useState([]);

  axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json').then((response)=>{
    try {
      console.log(response.data.album)
    setPlaylist(response.data.album)
      console.log(playlist);
    } catch (error) {
      alert(error.message);
    }
  })
  return (
    <div>
      <h1>Create Playlist</h1>
      <form action="title">
        <div class="form">
          <label for="title">Title</label>
          <input type="text" />
        </div>

        <div class="form">
          <label for="description">Description</label>
          <input type="text" />
        </div>
      </form>

      <button onclick="popupAlert()">Submit</button>

      <div class="track-list">
        <img src="https://i.scdn.co/image/ab67616d0000b2737c52c7f7d1da8625e4376795" alt="picture"/>
        <p>Track title</p>
        <p>Artist</p>
        <p>Albums</p>
        <button>Select</button>
      </div>
    </div>
  );


}

export default App;
