import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

function ContextP() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <WelcomePanel />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
          Use dark mode
        </label>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ContextP;

function WelcomePanel() {
  return <Panel />;
}

function Panel() {
  return (
    <>
      <h1>Welcome here</h1>
      <Signup />
      {useContext(CurrentUserContext).currentUser ? <Login /> : null}
    </>
  );
}

function Signup() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canSignIn = firstName.trim() !== '' && lastName.trim() !== '';

  return (
    <>
      <label>
        First Name
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <button
        disabled={!canSignIn}
        onClick={() => setCurrentUser({ name: `${firstName} ${lastName}` })}
      >
        Sign In
      </button>
    </>
  );
}

const Login = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <p>
      You are logged in as {currentUser ? currentUser.name : 'Guest'}
    </p>
  );
};
