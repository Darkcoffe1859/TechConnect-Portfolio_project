import React from 'react';
import './Home.css'; // Import the CSS file

function Home() {
	  return (
		      <div>
		        <header>
		          <h1>Welcome to TechConnect</h1>
		          <p>Connecting software engineers with their new tech home.</p>
		        </header>
		        <section>
		          <h2>About Us</h2>
		          <p>
		            TechConnect is a platform designed to help software engineers and
		            tech professionals who relocated to a new environment connect with their local tech community, discover
		            tech hubs, and build lasting connections.
		          </p>
		        </section>
		        <section>
		          <h2>Get Started</h2>
		          <p>
		            Join our community to connect with tech enthusiasts, find your new
		            workspace, and explore events near you.
		          </p>
		          <button>Sign Up</button>
		        </section>
		      </div>
		    );
}

export default Home;

