import React from 'react';
import UserCard from './UserCard'; // Importing UserCard component

function App() {
  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
    padding: '30px',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    marginTop: '40px',
  };

  return (
    <div style={appStyle}>
      <h1>User Profile Cards</h1>

      <div style={cardContainerStyle}>
        <UserCard 
          name="Madhumitha Bandaru" 
          age={22} 
          bio="A passionate web developer who loves building creative and responsive interfaces."
        />

        <UserCard 
          name="John Doe" 
          age={25} 
          bio="A full-stack developer interested in AI, cloud, and open-source projects."
        />

        <UserCard 
          name="Sarah Lee" 
          age={28} 
          bio="A UI/UX designer with a love for clean layouts and meaningful user experiences."
        />
      </div>
    </div>
  );
}

export default App;
