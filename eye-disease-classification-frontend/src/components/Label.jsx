function Label({ value, children, className, ...props }) {
    return (
        <label className={`${className} text-slate-600 mb-1 block`} {...props}>
            {value || children}
        </label>
    );
}

export default Label;
