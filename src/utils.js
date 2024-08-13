import * as tf from '@tensorflow/tfjs';

// Function to load the ResNet50 model
export const loadResNet50Model = async () => {
  try {
    // Load the model from a URL; ensure this URL is correct and accessible
    const model = await tf.loadGraphModel(
      'https://tfhub.dev/tensorflow/tfjs-model/resnet_v2_50/classification/1/default/1/model.json'
    );
    console.log('Model loaded successfully');
    return model;
  } catch (error) {
    console.error('Error loading ResNet50 model:', error);
    throw error;
  }
};

// Function to preprocess the image
export const preprocessImage = (imageElement) => {
  try {
    // Convert the image element to a tensor
    const tensor = tf.browser.fromPixels(imageElement)
      .resizeNearestNeighbor([224, 224]) // Resize the image to 224x224 pixels
      .toFloat() // Convert the image data to float
      .div(tf.scalar(127.5)) // Normalize the image data to [-1, 1]
      .sub(tf.scalar(1)) // Normalize the image data to [-1, 1]
      .expandDims(); // Add a batch dimension
    
    console.log('Image processed successfully');
    return tensor;
  } catch (error) {
    console.error('Error preprocessing image:', error);
    throw error;
  }
};
