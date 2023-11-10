import React from 'react';
import './Profile.css'; // Import the CSS file

function Profile() {
	  return (
		      <div className="profile">
		        <header>
		          <h1>User Profile</h1>
		        </header>
		        <section>
		          <h2>Your Profile Information</h2>
		          <div className="profile-info">
		            <div className="profile-picture">
		              <img src="profile-image.jpg" alt="Profile" />
		            </div>
		            <div className="profile-details">
		              <p><strong>Name:</strong> John Doe</p>
		              <p><strong>Email:</strong> john.doe@example.com</p>
		              <p><strong>Location:</strong> New York, USA</p>
		              <p><strong>Skills:</strong> JavaScript, React, Python, etc.</p>
		            </div>
		          </div>
		        </section>
		        <section>
		          <h2>Your Connections</h2>
		          <div className="connections">
		            <div className="connection">
		              <img src="connection1.jpg" alt="Connection 1" />
		              <p>Connection 1</p>
		            </div>
		            <div className="connection">
		              <img src="connection2.jpg" alt="Connection 2" />
		              <p>Connection 2</p>
		            </div>
		            </div>
		        </section>
		      </div>
		    );
}

export default Profile;

