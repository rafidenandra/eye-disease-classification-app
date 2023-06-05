import { useState } from 'react';
import { EyeIconSolid, EyeSlashIconSolid } from '../assets/icons';

function PasswordInput({ className, onChange, ref, ...props }) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className={'relative'}>
            <div className={'w-full'}>
                <input
                    {...props}
                    type={open ? 'text' : 'password'}
                    onChange={onChange}
                    ref={ref}
                    className={`${className} w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-200 border-slate-300 shadow-sm rounded-lg`}
                />
                <div
                    className={
                        'text-2xl absolute top-2 right-2 cursor-pointer'
                    }>
                    {open ? (
                        <span onClick={toggle} className={'text-slate-600'}>
                            <EyeSlashIconSolid />
                        </span>
                    ) : (
                        <span onClick={toggle} className={'text-slate-600'}>
                            <EyeIconSolid />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PasswordInput;
