import { useRef, useEffect } from 'react';

const Input = ({
    type = 'text',
    className,
    onChange,
    isFocused = false,
    ...props
}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            ref={inputRef}
            type={type}
            onChange={onChange}
            className={`${className} w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-200 border-slate-300 shadow-sm rounded-lg`}
        />
    );
};

export default Input;
