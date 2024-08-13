import React, { useState } from 'react';
import axios from 'axios';
import AgeEstimationPage from './AgeEstimationPage';

const ParentComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictedAge, setPredictedAge] = useState(undefined);

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      setSelectedImage(URL.createObjectURL(imageFile));

      const formData = new FormData();
      formData.append('file', imageFile);

      try {
        const response = await axios.post('http://localhost:5000/estimate_age', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setPredictedAge(response.data.predicted_age);
      } catch (error) {
        console.error('Error estimating age:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <AgeEstimationPage selectedImage={selectedImage} predictedAge={predictedAge} />
      )}
    </div>
  );
};

export default ParentComponent;
