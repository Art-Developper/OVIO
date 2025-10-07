import React from 'react';

const countries = [
    { code: '+374', flag: '🇦🇲' },
    { code: '+1', flag: '🇺🇸' },
    { code: '+44', flag: '🇬🇧' },
];

const PhoneInput = ({ label, name, phoneNumber, countryCode, onPhoneNumberChange, onCountryCodeChange, required }) => {
    const labelClasses = "block mb-2 text-sm text-gray-700";
    const selectClasses = "p-3 border border-border-gray rounded-lg text-base bg-light-gray cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-purple flex-shrink-0";
    const inputClasses = "w-full p-3 border border-border-gray rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary-purple";

    return (
        <div className="mb-5">
            <label htmlFor={name} className={labelClasses}>* {label}</label>
            <div className="flex gap-2">
                <select
                    className={selectClasses}
                    value={countryCode}
                    onChange={(e) => onCountryCodeChange(e.target.value)}
                >
                    {countries.map(country => (
                        <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                        </option>
                    ))}
                </select>
                <input
                    type="tel"
                    id={name}
                    name={name}
                    value={phoneNumber}
                    onChange={(e) => onPhoneNumberChange(e.target.value)}
                    required={required}
                    className={`${inputClasses} flex-grow`}
                />
            </div>
        </div>
    );
};

export default PhoneInput;