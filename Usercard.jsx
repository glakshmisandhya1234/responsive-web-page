import React from 'react';

function UserCard({ name, age, bio }) {
  const cardStyle = {
    border: '2px solid #ddd',
    borderRadius: '15px',
    padding: '20px',
    width: '280px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    margin: '40px auto',
    background: 'linear-gradient(135deg, #f9f9f9, #e3f2fd)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '3px solid #90caf9',
    marginBottom: '10px',
    objectFit: 'cover',
  };

  const nameStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  };

  const ageStyle = {
    fontSize: '1.1em',
    color: '#555',
    margin: '6px 0',
  };

  const bioStyle = {
    fontSize: '1em',
    color: '#666',
    fontStyle: 'italic',
    lineHeight: '1.4',
  };

  const handleHover = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? 'translateY(-5px)' : 'translateY(0)';
    e.currentTarget.style.boxShadow = isHover
      ? '0 10px 20px rgba(0,0,0,0.2)'
      : '0 4px 8px rgba(0,0,0,0.1)';
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
    >
      <img
        src="https://via.placeholder.com/100"
        alt="User Avatar"
        style={avatarStyle}
      />
      <h2 style={nameStyle}>{name}</h2>
      <p style={ageStyle}>Age: {age}</p>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserCard;
