import React from 'react';
import './Messaging.css';

function Messaging() {
	  return (
		      <div className="messaging">
		        <header>
		          <h1>Messages</h1>
		        </header>
		        <section>
		          <div className="conversations">
		            {/* Map through conversations and render a preview for each */}
		          </div>
		          <div className="chat">
		            <h2>Select a conversation to start chatting</h2>
		          </div>
		        </section>
		      </div>
		    );
}

export default Messaging;

