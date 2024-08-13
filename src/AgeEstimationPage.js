import React from 'react';

const AgeEstimationPage = ({ selectedImage, predictedAge }) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={selectedImage} alt="Selected" style={styles.image} />
      </div>
      <div style={styles.ageContainer}>
        <h2 style={styles.ageText}>
          Estimated Age: {predictedAge !== undefined ? predictedAge : 'Calculating...'}
        </h2>
      </div>
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
    backgroundColor: '#f0f4f8',
    padding: '20px',
    boxSizing: 'border-box',
  },
  imageContainer: {
    marginBottom: '30px',
    borderRadius: '15px',
    overflow: 'hidden',
    border: '2px solid #e0e0e0',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  },
  image: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '15px',
  },
  ageContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  ageText: {
    color: '#333',
    fontSize: '24px',
    fontWeight: '600',
    margin: '0',
  },
};

export default AgeEstimationPage;
