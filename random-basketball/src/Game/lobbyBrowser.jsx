import React from 'react';
import { useLocation } from 'react-router-dom';

function LobbyBrowser() {
  // Use the useLocation hook to access the current URL
  const location = useLocation();

  // Use URLSearchParams to extract query parameters from the URL
  const searchParams = new URLSearchParams(location.search);

  // Get the username from the query string using the key 'user_name'
  const userName = searchParams.get('user_name');

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      <ul>
        <a href={`/game?room=Room1&user=${userName}`}><li id="1">Room 1</li></a>
        <a href={`/game?room=Room2&user=${userName}`}><li id="2">Room 2</li></a>
        <a href={`/game?room=Room3&user=${userName}`}><li id="3">Room 3</li></a>
      </ul>
    </div>
  );
}

export default LobbyBrowser;
