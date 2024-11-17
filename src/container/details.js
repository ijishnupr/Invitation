import { Fragment } from "react";

function WeddingInvitation() {
    return (
        <Fragment>
            <div
                style={{
                    background: '#495E57',
                    color: '#495E57',
                    height: '600px',
                    borderRadius: '20px',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Great Vibes', cursive",
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    marginBottom:'10px'
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
                    fontSize: '1.2rem',
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: '30px',
                    maxWidth: '600px',
                    lineHeight: '1.5'
                }}>
                    Join us for a day of love, laughter, and celebration as we exchange our vows.
                    <br />
                    <b>Date:</b> December 14, 2024 <br />
                    <b>Time:</b> 11:40 AM & 12 PM <br />
                    <b>Venue:</b> <a href="https://maps.app.goo.gl/CESqGAdUEdv4xzwx5" >click</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>

                {/* RSVP Section */}
                <a 
    href="https://drive.google.com/uc?export=download&id=1T8YFL6su_YCxKYQ93EwxUsqQbYlMS8yV" 
    class="btn btn-outline-light my-2 my-sm-0"
>
    Download
</a>

            </div>
        </Fragment>
    );
}

export default WeddingInvitation;
