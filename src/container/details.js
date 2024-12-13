import { Fragment } from "react";

function WeddingInvitation() {



  return (

    <Fragment>
      <div
        style={{
          background: '#495E57',
          color: '#495E57',
          height: '600px',
          marginTop: '60px',
          borderRadius: '20px',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Great Vibes', cursive",
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          marginBottom: '10px'
        }}
        className="wedding-invitation"
      >
        {/* Title Section */}
        <h1 style={{
          fontSize: '3rem',
          color: '#F4CE14',
          marginBottom: '10px',
          textShadow: '2px 2px 5px rgba(0,0,0,0.3)'
        }}>
          You're Invited!
        </h1>
        <h2 style={{
          fontSize: '2rem',
          color: '#EEDF7A',
          fontFamily: "'Playfair Display', serif",
          marginBottom: '20px'
        }}>
          {/* To the Wedding of Sujay & Karthika */}
        </h2>

        {/* Details Section */}
        <p style={{
          fontSize: '.8rem',
          fontFamily: 'monospace',
          color: 'white',
          textAlign: 'center',
          marginBottom: '30px',
          maxWidth: '600px',
          lineHeight: '1.5'
        }}>
          Join us for a day of love, laughter, and celebration as we exchange our vows.
          <br />
          <b>Date:</b> December 14, 2024 <br />
          <b>Time:</b> 11:40 AM & 12 PM <br /><br />
          <b>Venue:</b> <a href="https://maps.app.goo.gl/CESqGAdUEdv4xzwx5" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" color="white" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg></a>
        </p>

        {/* RSVP Section */}
        <a
          href="https://drive.google.com/uc?export=download&id=1T8YFL6su_YCxKYQ93EwxUsqQbYlMS8yV"
          className="btn btn-outline-warning my-2 my-sm-0"
        >
          Download Invitation
        </a>
        <br />

        {/* Watch Live Button */}
        <a
          href="https://www.youtube.com/live/0NC4v7IP2-A?feature=share"
          className="btn btn-primary mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Party Live
        </a>
        <a
          href="https://www.youtube.com/live/VzK1kdkpeuE?feature=share"
          className="btn btn-danger mt-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wedding Live
        </a>



      </div>
    </Fragment>
  );
}

export default WeddingInvitation;