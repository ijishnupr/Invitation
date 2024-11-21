
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from './container/main';
import Detatils from './container/details';
function App() {
  return (
    <div className="container">
     
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
