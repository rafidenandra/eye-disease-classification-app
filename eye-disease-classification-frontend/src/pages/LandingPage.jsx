import Button from '../components/Button';
import AppLogo from '../assets/svg/app-logo.svg';
import LandingPageImage from '../assets/images/landing-page-image.png';
import Cataract from '../assets/images/cataract.png';
import Glaucoma from '../assets/images/glaucoma.png';
import DR from '../assets/images/diabetic-retinopathy.png';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div
            className={
                'bg-gradient-to-r from-slate-50 to-slate-100 text-sky-900 p-6 pt-12'
            }>
            <div className={'container mx-auto max-w-screen-lg'}>
                <header
                    className={
                        'font-medium inline-flex justify-center items-center gap-x-2 mb-20 sm:mb-24 md:mb-32'
                    }>
                    <span>
                        <img src={AppLogo} alt='app-logo' />
                    </span>
                    <p>EDC App</p>
                </header>

                <div className={'flex flex-col md:gap-y-24'}>
                    <div
                        className={
                            'md:h-80 flex flex-col-reverse gap-y-10 md:flex-row gap-x-8'
                        }>
                        <div
                            className={
                                'h-auto gap-y-6 lg:h-full flex flex-col justify-between mb-20'
                            }>
                            <p
                                className={
                                    'text-4xl font-bold md:text-5xl lg:text-6xl'
                                }>
                                Classification App for Detecting Eye Disease
                            </p>
                            <p className={'text-base lg:text-lg font-inter'}>
                                Helps ophthalmologists around the world to
                                detect human most popular eye diseases such as
                                cataract, glaucoma, and diabetic retinopathy.
                            </p>
                            <div className={'mx-auto sm:m-0'}>
                                <Link to={'/upload'}>
                                    <Button>Get Started</Button>
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

                    <div
                        className={
                            'flex flex-col items-center justify-center gap-y-8 md:w-72 lg:w-full mx-auto text-center mb-20'
                        }>
                        <p className={'text-2xl font-medium text-center'}>
                            Eye Diseases
                        </p>
                        <div
                            className={
                                'flex flex-col lg:w-full lg:flex-row lg:justify-center lg:gap-x-10'
                            }>
                            <div className={'w-full'}>
                                <img
                                    src={Cataract}
                                    alt='cataract-image'
                                    className={
                                        'rounded-xl h-auto shadow-lg mb-2 border-4 border-slate-200'
                                    }
                                />
                                <p className={'font-medium mb-1'}>Cataract</p>
                                <p className={'font-inter'}>
                                    Clouding of the normally clear lens of the
                                    eye.
                                </p>
                            </div>
                            <div className={'w-full'}>
                                <img
                                    src={Glaucoma}
                                    alt='glaucoma-image'
                                    className={
                                        'rounded-xl h-auto shadow-lg mb-2 border-4 border-slate-100'
                                    }
                                />
                                <p className={'font-medium mb-1'}>Glaucoma</p>
                                <p className={'font-inter'}>
                                    A group of eye conditions that can cause
                                    blindness.
                                </p>
                            </div>
                            <div className={'w-full'}>
                                <img
                                    src={DR}
                                    alt='dr-image'
                                    className={
                                        'rounded-xl h-auto shadow-lg mb-2 border-4 border-slate-100'
                                    }
                                />
                                <p className={'font-medium mb-1'}>
                                    Diabetic Retinopathy
                                </p>
                                <p className={'font-inter'}>
                                    A complication of diabetes that affects the
                                    eyes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer></footer>
            </div>
        </div>
    );
}

export default LandingPage;
