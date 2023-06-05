function LabeledInput(props) {
    const { type = 'text', label, name, className, ref, onChange } = props;

    return (
        <>
            <label className={'text-slate-600 mb-1 block'} htmlFor={name}>
                {label}
            </label>
            <input
                {...props}
                type={type}
                name={name}
                onChange={onChange}
                ref={ref}
                className={`${className} w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-200 border-slate-300 shadow-sm rounded-lg`}
            />
        </>
    );
}

export default LabeledInput;
