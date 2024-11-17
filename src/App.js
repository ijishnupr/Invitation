import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from './container/main';
import Detatils from './container/details';
import backgroundAudio from './container/audio.mpeg'; // Replace with the path to your audio file

function App() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audio] = useState(new Audio(backgroundAudio)); // Create an audio instance

  useEffect(() => {
    // Attempt to autoplay after a slight delay (0.005 seconds)
    const timer = setTimeout(() => {
      try {
        audio.loop = true;
        audio.play();
        setAudioPlaying(true);
      } catch (error) {
        console.log('Autoplay was prevented:', error);
      }
    }, 5); // 5 milliseconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [audio]);

  return (
    <div className="container">
      {/* Main Content */}
      <div className="row">
        <div style={{ height: "100vh" }} className="col-12 col-md-8 mx-auto">
          <Main />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Detatils />
        </div>
      </div>
    </div>
  );
}

export default App;
