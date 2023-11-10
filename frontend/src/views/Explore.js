mport React from 'react';
import './Explore.css'; // Import the CSS file

function Explore() {
	  const places = [
		      { name: 'TechHub 1', location: 'Nigeria, Abuja' },
		      { name: 'Co-working Space 2', location: 'Nigeria, Abuja' },
		      { name: 'Tech Meetup 3', location: 'Lagos, Nigeria' },
	  ];
	return (
		<div className="explore">
		<header>
		<h1>Explore Tech Places</h1>
		</header>
		<section>
		<h2>Available Places</h2>
		<div className="places">
		{places.map((place, index) => (
			<div  key={index} className="place">
			<h3>{place.name}</h3>
			<p><strong>Location:</strong> {place.location}</p>
			<button>Connect</button>
			</div>
		))}
		</div>
		</section>
		</div>
	);
}
