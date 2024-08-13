import React from 'react';

const NextPage = ({ selectedImage, setCurrentPage, handleEstimateAge }) => {
  return (
    <div style={styles.container}>
      {selectedImage && (
        <div style={styles.imageContainer}>
          <img src={selectedImage} alt="Selected" style={styles.image} />
        </div>
      )}
      <button style={styles.switchButton} onClick={() => setCurrentPage('uploadOptions')}>
        UPLOAD AGAIN
      </button>
      <button
        style={styles.proceedButton}
        onClick={() => {
          handleEstimateAge();
          setCurrentPage('ageEstimationPage');
        }}
      >
        PROCEED TO AGE ESTIMATION
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
  imageContainer: {
    position: 'relative',
    marginBottom: '20px',
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '10px',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  switchButton: {
    margin: '10px',
    padding: '12px 24px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  proceedButton: {
    margin: '10px',
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

export default NextPage;
