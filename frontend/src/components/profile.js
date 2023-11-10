import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
	const [user, setUser] = useState({});

	useEffect(() => {
		// Fetch user data from the backend
		axios.get('/api/user-profile')
		    .then((response) => {
			    setUser(response.data);
		    })
		.catch((error) => {
			// Handle error
		});
	}, []);

	return (
		<div>
		    <h2>User Profile</h2>
		    <p>Username: {user.username}</p>
		    {/* Display other user information here */}
		</div>
	);
}

export default Profile;
