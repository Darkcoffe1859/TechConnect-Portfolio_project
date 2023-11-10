import React, { useState } from 'react';
import axios from 'axios';

function Login() {
	const [username, setUsername} = useState('');
        const [password, setPassword] = useState('');
        const loginUser = async () => {
		try {
			await axios.post('/api/login', { username, password });
			// Handle successfull login
		} catch (error) {
			// Handle login error
			}
	}

return (
	<div>
	    <h2>Login</h2>
	    <input type="password" placeholder="Password" value={password} onChange={(e) =>
            <button onClick={loginUser}>Login</button>
	</div>
);
	    }

	export default Login;
