import React from 'react';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';

const FooterNav = () => {
    return (
        <div className="flex justify-around py-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <a href="#" className="flex flex-col items-center text-gray-400 text-xs">
                <AiFillHome className="text-2xl mb-1" />
            </a>
            <a href="#" className="flex flex-col items-center text-primary-purple text-xs">
                <AiFillMessage className="text-2xl mb-1" />
            </a>
        </div>
    );
};

export default FooterNav;