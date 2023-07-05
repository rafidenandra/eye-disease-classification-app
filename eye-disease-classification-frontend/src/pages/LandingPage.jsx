import Button from '../components/Button';
import AppLogo from '../assets/svg/app-logo.svg';
import Doctor from '../assets/svg/healthicons_doctor-male.svg';
import Accuracy from '../assets/svg/mingcute_target-line.svg';
import Fast from '../assets/svg/typcn_flash.svg';
import LandingPageImage from '../assets/images/landing-page-image.png';
import Cataract from '../assets/images/cataract.png';
import Glaucoma from '../assets/images/glaucoma.png';
import DR from '../assets/images/diabetic-retinopathy.png';
import { Link } from 'react-router-dom';

const eyeDiseases = [
    {
        name: 'Cataract',
        description:
            'A clouding of the lens in the eye that can cause blurry vision.',
        image: Cataract,
    },
    {
        name: 'Diabetic Retinopathy',
        description:
            'A complication of diabetes that affects the retina, the light-sensitive tissue at the back of the eye.',
        image: DR,
    },
    {
        name: 'Glaucoma',
        description:
            'A group of eye diseases that damage the optic nerve, which is the nerve that carries information from the eye to the brain.',
        image: Glaucoma,
    },
];

const benefits = [
    {
        slug: 'fast',
        description:
            'The classification system is faster by using ready-made CNN model.',
        image: Fast,
    },
    {
        slug: 'accurate',
        description:
            'Accurate classification system thanks to complex CNN model learning.',
        image: Accuracy,
    },
    {
        slug: 'useful',
        description: 'Reliable assistant for doctors and ophthalmologists.',
        image: Doctor,
    },
];

function LandingPage() {
    return (
        <div
            className={
                'bg-gradient-to-r from-slate-50 to-slate-100 text-sky-900'
            }>
            <div className={'container mx-auto max-w-screen-lg p-6 pt-12'}>
                {/* Header or Navbar */}
                <header className={'mb-16 sm:mb-24 md:mb-32'}>
                    <div
                        className={
                            'font-medium inline-flex justify-center items-center gap-x-2'
                        }>
                        <span>
                            <img src={AppLogo} alt='app-logo' />
                        </span>
                        <p>EDC App</p>
                    </div>
                </header>

                {/* Section Wrapper */}
                <div
                    className={
                        'flex flex-col gap-y-20 mb-20 sm:gap-y-24 md:gap-y-32'
                    }>
                    {/* Hero Section */}
                    <section>
                        <div
                            className={
                                'md:h-80 flex flex-col-reverse gap-y-10 gap-x-8 md:flex-row md:items-center'
                            }>
                            <div
                                className={
                                    'h-auto lg:h-full flex flex-col justify-between gap-y-6'
                                }>
                                <p
                                    className={
                                        'text-4xl font-bold text-center md:text-start md:text-5xl lg:text-6xl'
                                    }>
                                    Classification App for Detecting Eye Disease
                                </p>
                                <p
                                    className={
                                        'text-base lg:text-lg font-inter text-center md:text-start'
                                    }>
                                    Helping doctors and ophthalmologists to
                                    efficiently and accurately detect common eye
                                    diseases such as cataracts, glaucoma and
                                    diabetic retinopathy.
                                </p>
                                <div className={'mx-auto md:m-0'}>
                                    <Link to={'/upload'}>
                                        <Button>Try it now!</Button>
                                    </Link>
                                </div>
                            </div>

                            <img
                                src={LandingPageImage}
                                alt='landing-page-image'
                                className={
                                    'rounded-xl w-36 h-36 sm:w-64 sm:h-64 md:w-80 md:h-80 shadow-lg mx-auto'
                                }
                            />
                        </div>
                    </section>

                    {/* Eye Disease Section */}
                    <section>
                        <div
                            className={
                                'flex flex-col items-center justify-center gap-y-8 mx-auto text-center md:w-full'
                            }>
                            <p className={'text-2xl font-medium text-center'}>
                                Eye Disease Labels
                            </p>
                            <div
                                className={
                                    'flex flex-col gap-y-8 lg:w-full lg:flex-row lg:justify-center lg:gap-x-10'
                                }>
                                {eyeDiseases.map((eyeDisease) => (
                                    <div
                                        key={eyeDisease.name}
                                        className={'w-full '}>
                                        <img
                                            src={eyeDisease.image}
                                            alt={eyeDisease.name}
                                            className={
                                                'rounded-xl h-auto shadow-lg mb-2 border-4 border-slate-200 xs:w-3/4 xs:mx-auto sm:w-1/2 sm:mx-auto md:w-1/2 lg:w-3/4'
                                            }
                                        />
                                        <p className={'font-medium mb-1'}>
                                            {eyeDisease.name}
                                        </p>
                                        <p className={'font-inter'}>
                                            {eyeDisease.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section>
                        <div
                            className={
                                'flex flex-col items-center justify-center gap-y-8 mx-auto md:w-full'
                            }>
                            <p className={'text-2xl font-medium text-center'}>
                                Benefits Using This App
                            </p>
                            <div
                                className={
                                    'flex flex-col gap-y-8 lg:w-full lg:flex-row lg:justify-center lg:gap-x-10'
                                }>
                                {benefits.map((benefit) => (
                                    <div
                                        key={benefit.slug}
                                        className='flex flex-row gap-x-6 items-center'>
                                        <img
                                            src={benefit.image}
                                            alt={benefit.slug}
                                        />
                                        <p>{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section>
                        <div
                            className={
                                'flex flex-col items-center justify-center gap-y-8 md:w-full mx-auto'
                            }>
                            <p className={'text-2xl font-medium text-center'}>
                                FAQ
                            </p>
                            <div className='px-6'>
                                <ol className='list-decimal'>
                                    <li className='mb-10'>
                                        <p className='font-bold mb-2'>
                                            What types of fundus images can the
                                            web app classify?
                                        </p>
                                        <p>
                                            The web app can classify a variety
                                            of fundus images, including images
                                            of normal eyes and images of eyes
                                            with different eye diseases.
                                        </p>
                                    </li>
                                    <li className='mb-10'>
                                        <p className='font-bold mb-2'>
                                            How accurate is the CNN model?
                                        </p>
                                        <p>
                                            The CNN model has been shown to be
                                            accurate in classifying eye
                                            diseases. The accuracy of the model
                                            depends on the quality of the fundus
                                            images.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='font-bold mb-2'>
                                            What are the limitations of the web
                                            app?
                                        </p>
                                        <p>
                                            The web app is not a substitute for
                                            a medical diagnosis. If you are
                                            concerned about your eye health, you
                                            should see a doctor.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer Section */}
            <footer className='bg-gradient-to-r from-sky-600 to-sky-900'>
                <div className='container mx-auto max-w-screen-lg'>
                    <div className='text-white p-6 flex flex-col gap-y-2 sm:text-center'>
                        <p>
                            Made By{' '}
                            <span className='font-semibold'>Rafi Denandra</span>
                        </p>
                        <p>4 D4 Teknik Informatika B - 2110191048</p>
                        <p>2023 - Politeknik Elektronika Negeri Surabaya</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
