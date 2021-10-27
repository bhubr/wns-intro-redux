import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="App">
      <Navbar
        user={currentUser}
        onLogout={() => setCurrentUser(null)}
      />
      <main>
      {
        currentUser
          ? <Profile user={currentUser} />
          : <Login onLoginSuccess={setCurrentUser} />
      }
      </main>
    </div>
  );
}

export default App;
