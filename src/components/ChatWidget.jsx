import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import InputGroup from './InputGroup';
import PhoneInput from './PhoneInput';
import FooterNav from './FooterNav';

const ChatWidget = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        countryCode: '+374'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Ձեր հարցն ուղարկվել է:');
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden flex flex-col min-h-[500px] font-sans">
            <ChatHeader />
            <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
                <div className="p-5 flex-grow overflow-y-auto">
                    <InputGroup
                        label="Անուն"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <InputGroup
                        label="Էլ. հասցե"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <PhoneInput
                        label="Հեռախոսահամար"
                        name="phone"
                        phoneNumber={formData.phone}
                        countryCode={formData.countryCode}
                        onPhoneNumberChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                        onCountryCodeChange={(value) => setFormData(prev => ({ ...prev, countryCode: value }))}
                        required
                    />
                    <InputGroup
                        label="Նամակ"
                        name="message"
                        type="textarea"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                   
                    <button type="submit" className="bg-primary-purple text-white py-3 rounded-lg mt-4 w-full">Ուղարկել</button>
                </div>
            </form>
            <FooterNav />
        </div>
    );
};

export default ChatWidget;