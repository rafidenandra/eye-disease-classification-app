# Import general libraries
import numpy as np

# Import Tensorflow & Keras
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import load_img, img_to_array

# ==== Prediction ====

final_model = load_model('trained_model/trained_model_v1.h5', compile=False)
classes = ['Cataract', 'Diabetic Retinopathy', 'Glaucoma', 'Normal']

# Image size
IMG_SIZE_1 = 100
IMG_SIZE_2 = 180
IMG_SIZE_3 = 224
IMG_SIZE_4 = 256
IMG_SIZE = IMG_SIZE_4

# def predict_image(filename, model = final_model):
#     img = load_img(filename, target_size = (IMG_SIZE, IMG_SIZE))
#     img = img_to_array(img)
#     img = img.reshape(1, IMG_SIZE, IMG_SIZE, 3)
# 
#     img = img.astype('float32')
#     img = img / 255.0
#     result = model.predict(img)
# 
#     print('Prediction result:', result)
# 
#     dict_result = {}
# 
#     for i in range(len(classes)):
#         dict_result[classes[i]] = np.float64(result[0][i])
# 
#     sorted_prediction_result = sorted(dict_result.items(), key=lambda x:x[1], reverse=True)
#     print(sorted_prediction_result)
#     converted_dict = dict(sorted_prediction_result)
# 
#     return converted_dict

def predict_image(img_path, model = final_model):
    img = load_img(img_path, target_size = (IMG_SIZE, IMG_SIZE))
    img_array = img_to_array(img)
    # img_array = tf.expand_dims(img_array, 0)
    img_array = tf.reshape(img_array, (1, IMG_SIZE, IMG_SIZE, 3))

    predictions = model.predict(img_array / 255)
    score = tf.nn.softmax(predictions[0])

    print('\npredictions:', predictions)
    print('\nscore:', score)

    print('\nargmax score:', np.argmax(score))
    print('\nmax score:', np.max(score), '=>', 100 * np.max(score))
    print('\nclass predicted:', classes[np.argmax(score)])

    print("\nThis image most likely belongs to {} with a {:.2f} percent confidence"
          .format(classes[np.argmax(score)], 100 * np.max(score)))
    
    dict_result = {}

    for i in range(len(classes)):
        # dict_result[classes[i]] = np.float64(predictions[0][i])
        dict_result[classes[i]] = np.float64(score[i])

    print('\ndict_result:', dict_result)

    sorted_prediction_result = sorted(dict_result.items(), key=lambda x:x[1], reverse=True)
    print('sorted_prediction_result:', sorted_prediction_result)
    converted_dict = dict(sorted_prediction_result)

    print('converted_dict:', converted_dict)

    return converted_dict