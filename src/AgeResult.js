import React from 'react';

const AgeResult = ({ estimatedAge, onNavigate }) => {
  return (
    <div style={styles.container}>
      <h1>Estimated Age</h1>
      <p style={styles.ageText}>{estimatedAge}</p>
      <button style={styles.backButton} onClick={() => onNavigate('uploadOptions')}>
        BACK TO UPLOAD
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fff',
  },
  ageText: {
    fontSize: '24px',
    color: '#28a745',
  },
  backButton: {
    marginTop: '20px',
    padding: '12px 24px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default AgeResult;
