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
                {/* Header or Navbar */}
                <header
                    className={
                        'font-medium inline-flex justify-center items-center gap-x-2 mb-12 sm:mb-24 md:mb-32'
                    }>
                    <span>
                        <img src={AppLogo} alt='app-logo' />
                    </span>
                    <p>EDC App</p>
                </header>

                {/* Section Wrapper */}
                <div
                    className={
                        'flex flex-col gap-y-16 mb-16 mx-auto sm:gap-y-20 md:gap-y-28'
                    }>
                    {/* Upload Form Section */}
                    <section>
                        <form onSubmit={onSubmitImage}>
                            <label
                                className={'font-medium'}
                                htmlFor='upload-image'>
                                Upload Image
                            </label>
                            <input
                                id='upload-image'
                                type='file'
                                onChange={onSelectFile}
                                className={
                                    'block w-full mt-2 text-sm text-sky-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-sky-900 hover:file:bg-blue-100 border-2 border-slate-1000 rounded-lg p-4 cursor-pointer'
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
                                    'Classify'
                                )}
                            </Button>
                        </form>
                    </section>

                    {/* Image Preview Section */}
                    <section>
                        <div>
                            <p
                                className={
                                    'text-2xl font-medium text-center mb-6'
                                }>
                                Image Preview
                            </p>
                            {selectedFile && (
                                <img
                                    className={
                                        'xs:w-3/4 sm:w-1/2 md:w-64 rounded-lg shadow-lg mx-auto'
                                    }
                                    src={preview}
                                    alt='eye-disease-preview'
                                />
                            )}
                        </div>
                    </section>

                    {/* Classification Result Section */}
                    <section className='flex flex-col gap-y-10'>
                        <p className={'text-2xl font-medium text-center'}>
                            Classification Result
                        </p>

                        {/* Wrapper */}
                        <div
                            className={
                                'flex flex-col gap-x-10 items-center justify-center gap-y-8 mx-auto text-center md:w-full lg:flex-row'
                            }>
                            <div
                                className={
                                    'flex flex-col justify-center items-center'
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
                                                prediction[
                                                    Object.keys(prediction)[0]
                                                ] * 100
                                            ).toFixed(2)}{' '}
                                            %
                                        </p>
                                    </>
                                )}
                            </div>

                            <span
                                className={
                                    'border-r border-slate-900 m-10'
                                }></span>

                            {/* Table Section */}
                            {prediction && (
                                <>
                                    <div className='border rounded-lg mx-4'>
                                        <div>
                                            <table className='table-auto overflow-x-auto w-full bg-white rounded-lg'>
                                                <thead>
                                                    <tr>
                                                        <th className='bg-sky-100 rounded-tl-lg p-4'>
                                                            Rank
                                                        </th>
                                                        <th className='bg-sky-100 p-4'>
                                                            Eye Disease
                                                        </th>
                                                        <th className='bg-sky-100 rounded-tr-lg p-4'>
                                                            Probability
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Object.entries(
                                                        prediction
                                                    ).map(
                                                        (
                                                            [key, value],
                                                            index
                                                        ) => {
                                                            return (
                                                                <tr
                                                                    className='border-b'
                                                                    key={index}>
                                                                    <td className='p-4'>
                                                                        {index +
                                                                            1}
                                                                    </td>
                                                                    <td className='p-4'>
                                                                        {key}
                                                                    </td>
                                                                    <td className='p-4'>
                                                                        {`${(
                                                                            value *
                                                                            100
                                                                        ).toFixed(
                                                                            2
                                                                        )} %`}
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UploadPage;
