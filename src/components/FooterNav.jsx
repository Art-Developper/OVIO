import React from 'react';
import { Link } from "react-router-dom"
import { AiFillHome, AiFillMessage } from 'react-icons/ai';

const FooterNav = () => {
    return (
        <div className="flex justify-around py-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <Link to="/" className="flex flex-col items-center text-gray-400 text-xs">
                <AiFillHome className="text-2xl mb-1" />
            </Link>

            <Link  to="../messages" className="flex flex-col items-center text-primary-purple text-xs">
                <AiFillMessage className="text-2xl mb-1" />
            </Link>
        </div>
    );
};

export default FooterNav;