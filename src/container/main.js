import { Fragment } from "react";
import backgroundImage from './img.jpeg'; // Replace this with your image path

function Main() {
  return (
    <Fragment>
      <div>
        {/* Background */}
        <div className="background-image"></div>
        <div className="gradient-overlay"></div>

        {/* Content */}
        <div className="content">
          <div className="text-center">
            <h1 className="celebrate">Wedding Invitation</h1>
            <div className="name">
              <h1 className="sujay">Sujay</h1>
              <h2 className="weds">weds</h2>
              <h1 className="sujay">Karthika</h1>
            </div>
          </div>
        </div>

        {/* Styling */}
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

          .background-image {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            z-index: -2;
          }

          .gradient-overlay {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50%;
            background: linear-gradient(to top, rgba(0, 0, 0, .9), transparent);
            z-index: -1;
          }

          .content {
            position: relative;
            color: white;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 30);
          }
          .text-center {
            text-align: center;
            margin-top: 15%;
          }
          .name {
            margin-top: 69%;
          }
          .weds {
            font-family: 'Dancing Script', cursive;
            font-size: 2.5rem;
          }
          .sujay {
            font-family: 'Dancing Script', cursive;
            color: white;
            font-size: 5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 30);
          }
          .celebrate {
            font-family: 'Edu Australia VIC WA NT Hand Precursive', cursive;
            color: #eedf7a;
            font-size: 2rem;
          }

          /* Responsive Styles */
          @media (max-width: 2168px) {
            .text-center {
              margin-top: 10%;
            }
            .sujay {
              font-size: 6rem;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 30);
            }
            .weds {
              font-size: 2rem;
            }
            .celebrate {
              font-size: 2rem;
            }
          }

          @media (max-width: 480px) {
            .text-center {
              margin-top: 10%;
            }
            .sujay {
              font-size: 5rem;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 30);
            }
            .weds {
              font-size: 2rem;
            }
            .celebrate {
              font-size: 1.5rem;
            }
            .name {
              margin-top: 90%;
            }
          }
        `}</style>
      </div>
    </Fragment>
  );
}

export default Main;
