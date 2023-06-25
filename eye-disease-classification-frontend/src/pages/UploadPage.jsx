import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import AppLogo from '../assets/svg/app-logo.svg';
import { TailSpin } from 'react-loader-spinner';

function UploadPage() {
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [prediction, setPrediction] = useState();
    const [loading, setLoading] = useState(false);

    const UPLOAD_IMAGE_URL = 'http://localhost:5000/upload-image';

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
    };

    const onSubmitImage = (e) => {
        setLoading(true);
        e.preventDefault();
        let formData = new FormData();
        formData.append('eye-image', selectedFile);

        axios
            .post(UPLOAD_IMAGE_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                console.log('res data:', res.data);
                console.log('type res.data:', typeof res.data);

                setPrediction(res.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div
            className={
                'bg-gradient-to-r from-slate-50 to-slate-100 text-sky-900 p-6 min-h-screen pt-12'
            }>
            <div className={'container mx-auto max-w-screen-lg'}>
                <header
                    className={
                        'font-medium inline-flex justify-center items-center gap-x-2 mb-12 sm:mb-24 md:mb-32'
                    }>
                    <span>
                        <img src={AppLogo} alt='app-logo' />
                    </span>
                    <p>EDC App</p>
                </header>
                <div className={'flex flex-col gap-y-10 mx-auto'}>
                    <form onSubmit={onSubmitImage}>
                        <label className={'font-medium'} htmlFor='upload-image'>
                            Upload Image
                        </label>
                        <input
                            id='upload-image'
                            type='file'
                            onChange={onSelectFile}
                            className={
                                'block w-full mt-2 text-sm text-sky-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-100 border-2 border-slate-1000 rounded-lg p-4'
                            }
                        />
                        <Button className={'mt-6'} type='submit'>
                            {loading ? (
                                <TailSpin
                                    radius='2'
                                    color='#ffffff'
                                    ariaLabel='tail-spin-loading'
                                    height={24}
                                    width={24}
                                    visible={true}
                                />
                            ) : (
                                'Predict'
                            )}
                        </Button>
                    </form>
                    <div>
                        {selectedFile && (
                            <img
                                className={'w-56 rounded-lg shadow-lg mx-auto'}
                                src={preview}
                                alt='eye-disease-preview'
                            />
                        )}
                    </div>
                </div>

                <div
                    className={
                        'flex flex-row gap-3 mx-auto mt-16 justify-evenly'
                    }>
                    <div
                        className={
                            'mt-4 flex flex-col justify-center items-center'
                        }>
                        {prediction && (
                            <>
                                <p className={'text-lg'}>Prediction:</p>
                                <p className={'text-3xl'}>
                                    {Object.keys(prediction)[0]}
                                </p>
                                <p className={'mt-6 text-lg'}>
                                    Confidence Rate:
                                </p>
                                <p className={'text-3xl'}>
                                    {(
                                        prediction[Object.keys(prediction)[0]] *
                                        100
                                    ).toFixed(2)}{' '}
                                    %
                                </p>
                            </>
                        )}
                    </div>

                    {prediction && (
                        <>
                            <span
                                className={'border-r border-slate-300'}></span>
                            <div
                                className={
                                    'mt-4 p-4 border border-slate-300 rounded-lg flex flex-col justify-center items-center '
                                }>
                                <table
                                    style={{ padding: '100px' }}
                                    className={'p-10 text-center'}>
                                    <tr>
                                        <th>Number</th>
                                        <th>Eye Disease</th>
                                        <th>Probability</th>
                                    </tr>
                                    {Object.entries(prediction).map(
                                        ([key, value], index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{key}</td>
                                                    <td>
                                                        {`${(
                                                            value * 100
                                                        ).toFixed(2)} %`}
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )}
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UploadPage;
