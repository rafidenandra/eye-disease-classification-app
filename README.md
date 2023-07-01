# eye-disease-classification-app
Final Project (PA) | Rafi Denandra | 2110191048 | D4 Informatics Engineering (2019-2023)

## How This Project Works
This repo comes up with 3 different directories. All of the data exploratory, data preparation, and data modeling is in the 'deep-learning-model' folder. 
The app itself is divided into backend and frontend side. I'm using Flask v2.2.2 for the backend side and Vite-ReactJS v18.2.0. You can run
the app using Anaconda3 or other similar tools.


1. Install Anaconda3 and create conda environment with python 3.9
2. Install important libraries such as NumPy, Pandas, Matplotlib, Scikit-Learn, OpenCV, Flask, Flask-Cors

    > :memo: In order to run the app, you'll need to install Flask v2.2.2 and Werkzeug v2.2.2 or v.2.2.3. Usually, when you install Flask with the specified v2.2.2 version, Werkzeug v2.2.3 is also included.

3. Install CUDA, cuDNN, and Tensorflow v2.10 in anaconda

   > :information_source: Follow the tutorial in this [link](https://www.tensorflow.org/install/pip#windows-native).

4. Run 'transfer_learning_2_mixed_resnet50 (final).ipynb'
5. After the model has been saved, put the model under the 'trained_model' folder in backend directory
6. Adjust all of the path inside the Flask app
7. Run the backend side

    ```bash
    flask --app server --debug run
    ```

8. Install npm if you don't have it
9. Open cmd or powershell and go to frontend directory, and install the dependencies
    
    ```bash
    npm install
    ```
    
10. Run the frontend side

    ```bash
    npm run dev
    ```

11. Open the link on the local browser
12. You're good to go!
