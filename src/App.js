import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from './container/main';
import Detatils from './container/details';
import backgroundAudio from './container/audio.mpeg'; // Replace with the path to your audio file

function App() {
  return (
    <div className="container">
      {/* Audio */}
      <audio autoPlay loop>
        <source src={backgroundAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

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
