function Button(props) {
    const { text, type = 'button', children, className = '' } = props;

    return (
        <button
            {...props}
            type={type}
            className={`${className} '[&>svg]:w-5 [&>svg]:stroke-1 transition duration-200 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 whitespace-nowrap inline-flex justify-center items-center gap-x-2 text-white px-4 h-10 border-0 rounded-lg`}>
            {text || children}
        </button>
    );
}

export default Button;
