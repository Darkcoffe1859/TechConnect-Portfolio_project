import React, { useState } from 'react';
import axios from 'axios';

function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const registerUser = async () => {
		try {
			await axios.post('/api/register', { username, password });
			// Handle successful registration
		} catch (error) {
			// Handle registration error
		}
	}

	return (
		<div>
		    <h2>Register</h2>
		    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
		    <input type="text" placeholder="Username" value={username} onChange={(e) => setPassword(e.target.value)} />
		    <input type="password" placeholder="Username" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '5px' }} />
		    <button onClick={registerUser} style={{ margin: '10px', padding'5px 10px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Register</button>
		</div>
		</div>
	);
}

export default Register;
