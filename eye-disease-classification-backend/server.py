# Import general libraries
import os
import numpy as np
import pandas as pd
from werkzeug.utils import secure_filename

# Import module
from module.model import predict_image

# Import Flask
from flask_cors import CORS, cross_origin
from flask import Flask, request, json


# ==== Flask Setup ====

UPLOAD_FOLDER_DIR = 'D:\\Kuliah\\Proyek Akhir 2022\\eye-disease-classification-using-cnn\\eye-disease-classification-backend\\static\\images'

app = Flask(__name__)
cors_app = CORS(app)
app.config['UPLOAD_FOLDER_DIR'] = UPLOAD_FOLDER_DIR
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = 'eyediseaseclassificationappSecretKey'
app.config['JSON_SORT_KEYS'] = False

# ==== Image Checking ====

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
invalid_extension_message = 'Invalid format image!'

def image_format_checking(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS 

# ==== API Routes ====

@app.route('/')
@cross_origin()
def index():
    return 'This is the Eye Disease Classification App API'

@app.route('/upload-image', methods=['POST'])
@cross_origin()
def upload_image():
    if request.method == 'POST':
        file = request.files['eye-image']
        
        if file and image_format_checking(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER_DIR'], filename))
            img_path = os.path.join(app.config['UPLOAD_FOLDER_DIR'], filename)
            img = file.filename

            print(img_path)
            print(img)

            prediction = predict_image(img_path)

            response = app.response_class(
                json.dumps(prediction, sort_keys=False),
                mimetype=app.config['JSONIFY_MIMETYPE']
            )

            print('response:', response)

            return response
        else:
            error = 'Mohon upload gambar dengan format png, jpg, atau jpeg.'
            return error
    else:
        return "Unsupported Request Method"

if __name__ == '__main__':
    app.run(debug=True)