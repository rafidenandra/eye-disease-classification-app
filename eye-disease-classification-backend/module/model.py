# Import general libraries
import numpy as np

# Import Tensorflow & Keras
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import load_img, img_to_array
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet import preprocess_input

# ==== Prediction ====

# The model comes separately to this repo due to file's size
# Download the model and put it to trained_model folder
# And then rename the model file name in the code below: 
final_model = load_model('trained_model/resnet50_mixed_best_model.h5', compile=True)
classes = ['Cataract', 'Diabetic Retinopathy', 'Glaucoma', 'Normal']

# Image size
IMG_SIZE_1 = 100
IMG_SIZE_2 = 180
IMG_SIZE_3 = 224
IMG_SIZE_4 = 256

# 100x100 were chosen because the ResNet50 model used in this
# app was trained with 100x100 pixel of images.
IMG_SIZE = IMG_SIZE_1 

# Function to predict the uploaded model
def predict_image(img_path, model = final_model):
    img = load_img(img_path, target_size = (IMG_SIZE, IMG_SIZE))
    img_array = image.img_to_array(img)
    img_array = preprocess_input(img_array)
    img_array = tf.expand_dims(img_array, axis=0)

    print('img_array shape:', img_array.shape)
    print('img_array type:', type(img_array))

    prediction_result = model.predict(img_array)

    print('prediction_result:', prediction_result)
    print('prediction_result shape:', prediction_result.shape)
    print('prediction_result type:', type(prediction_result))
    print('prediction_result[0]:', prediction_result[0])
    
    score = tf.nn.softmax(prediction_result[0])
    print('score:', score)

    print('\nargmax score:', np.argmax(score))
    print('\nmax score:', np.max(score), '=>', 100 * np.max(score))
    print('\nclass predicted:', classes[np.argmax(score)])

    print("\nThis image most likely belongs to {} with a {:.2f} percent confidence"
          .format(classes[np.argmax(score)], 100 * np.max(score)))
    
    dict_result = {}

    for i in range(len(classes)):
        dict_result[classes[i]] = np.float64(score[i])

    print('\ndict_result:', dict_result)

    sorted_prediction_result = sorted(dict_result.items(), key=lambda x:x[1], reverse=True)
    print('sorted_prediction_result:', sorted_prediction_result)
    converted_dict = dict(sorted_prediction_result)

    print('converted_dict:', converted_dict)

    return converted_dict