import React from 'react';

const InputGroup = ({ label, name, type, value, onChange, required, placeholder }) => {
    const inputClasses = "w-full p-3 border border-border-gray rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary-purple";
    const labelClasses = "block mb-2 text-sm text-gray-700";

    return (
        <div className="mb-5">
            <label htmlFor={name} className={labelClasses}>* {label}</label>
            {type === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    rows="4"
                    className={`${inputClasses} resize-y`}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    className={inputClasses}
                />
            )}
        </div>
    );
};

export default InputGroup;