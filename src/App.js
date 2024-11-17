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
    // Attempt to autoplay on load
    const tryAutoplay = async () => {
      try {
        audio.loop = true;
        await audio.play();
        setAudioPlaying(true);
      } catch (error) {
        console.log('Autoplay was prevented:', error);
      }
    };

    tryAutoplay();

    // Scroll event listener to trigger playback
    const handleScroll = () => {
      if (!audioPlaying) {
        audio.play();
        setAudioPlaying(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [audio, audioPlaying]);

  const handlePlayAudio = () => {
    if (!audioPlaying) {
      audio.play();
      setAudioPlaying(true);
    }
  };

  return (
    <div
      className="container"
      onClick={handlePlayAudio}
      style={{ cursor: "pointer" }} // Indicate interactivity
    >
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
