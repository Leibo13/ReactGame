import React, { useState } from 'react';
import './App.css'; // Ensure this is correct
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [userName, setUsername] = useState('');
  const navigate = useNavigate();

    const handleLogin = (e) => {
      navigate("/lobby-browser?user_name="+userName);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleLogin}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <button type="submit">Play Now!</button>
      </form>
    </div>
  );
}

export default Login