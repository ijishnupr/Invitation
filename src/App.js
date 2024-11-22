import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from './container/main';
import Detatils from './container/details';
import backgroundAudio from './container/audio.mpeg'; // Replace with the path to your audio file

function App() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audio] = useState(new Audio(backgroundAudio)); // Create an audio instance
  const [showModal, setShowModal] = useState(true); // State to control modal visibility

  const handleContinue = () => {
    if (!audioPlaying) {
      audio.loop = true;
      audio
        .play()
        .then(() => {
          setAudioPlaying(true); // Mark audio as playing
        })
        .catch((error) => {
          console.error('Audio playback failed or was prevented:', error);
        })
        .finally(() => {
          setShowModal(false); // Close the modal in all cases
        });
    } else {
      setShowModal(false); // Close the modal if audio is already playing
    }
  };

  return (
    <div className="container">
      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <p>Thank you for accepting the invitation!</p>
                <button
                  type="button"
                  className="btn btn-success float-end"
                  onClick={handleContinue} // Handle audio playback or continue
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="row">
        <div style={{ height: '100vh' }} className="col-12 col-md-8 mx-auto">
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
