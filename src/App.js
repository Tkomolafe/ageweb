import React, { useState } from 'react';
import AgeEstimator from './AgeEstimator';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UploadOptions from './UploadOptions';
import NextPage from './NextPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('ageEstimator');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (imageData) => {
    setSelectedImage(imageData);
    setCurrentPage('nextPage');
  };

  return (
    <div>
      {currentPage === 'ageEstimator' && <AgeEstimator onNavigate={setCurrentPage} />}
      {currentPage === 'loginForm' && <LoginForm onNavigate={setCurrentPage} />}
      {currentPage === 'signupForm' && <SignupForm onNavigate={setCurrentPage} />}
      {currentPage === 'uploadOptions' && <UploadOptions onImageSelect={handleImageSelect} />}
      {currentPage === 'nextPage' && (
        <NextPage
          selectedImage={selectedImage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;
