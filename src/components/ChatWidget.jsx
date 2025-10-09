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
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            countryCode: '+374'
        });
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-fuchsia-500 p-4 sm:p-6">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col min-h-[600px] font-sans">
                <ChatHeader />
                <form onSubmit={handleSubmit} className="flex flex-col flex-grow">

                    <div className="p-6 flex-grow overflow-y-auto space-y-5">
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

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-xl text-lg transition duration-300 ease-in-out shadow-lg
                                       hover:from-indigo-600 hover:to-purple-600 hover:shadow-xl hover:scale-105"
                        >
                            Ուղարկել
                        </button>
                    </div>
                </form>
                <FooterNav />
            </div>
        </div>
    );
};

export default ChatWidget;