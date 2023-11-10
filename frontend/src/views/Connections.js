import React from 'react';
import './Connections.css';

function Connections() {
	  return (
		      <div className="connections">
		        <header>
		          <h1>Connections</h1>
		        </header>
		        <section>
		          <div className="connections-list">
		            <div className="connection">
		              <img
		                src="https://via.placeholder.com/150"
		                alt="User"
		                className="connection-avatar"
		              />
		              <div className="connection-info">
		                <h2>John Doe</h2>
		                <p>Software Engineer</p>
		              </div>
		            </div>
		            {/* Add more connection items */}
		          </div>
		        </section>
		      </div>
		    );
}

export default Connections;

