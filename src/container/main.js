import { Fragment } from "react";
import video from './vedio.mp4';

function Main() {
  return (
    <Fragment >
      <div>

      {/* Background Video */}
      <video autoPlay muted loop playsInline className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content">
        <div className="text-center">
          <h2 className="celebrate">Celebrate our love with us!</h2>
          <br></br><br></br><br></br>
          <h1 className="sujay">Sujay</h1>
          <h2 className="weds">weds</h2>
          <h1 className="sujay" >Karthika</h1>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        
        .background-video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }
        .content {
          position: relative;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          }
        .text-center {
          text-align: center;
          margin-top: 20%;
        }
        .weds {
          font-family: 'Dancing Script', cursive;
          font-size: 2rem;
          }
          .sujay{
            font-family: 'Dancing Script', cursive;
            font-size: 4rem;
     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
     .celebrate{
     font-family: 'Edu Australia VIC WA NT Hand Precursive', cursive;
     color:#EEDF7A
     }
      `}</style>
            </div>
    </Fragment>
  );
}

export default Main;
