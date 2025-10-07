import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeadBar from "../components/headBar";
import Header from "./Header";
import Footer from "./footer";
import instructionleaflet from "../../public/pdfFiles/Իրազեկմանթերթիկ.pdf"

const menuItems = [
    {
        path: "/about/services_accessibility",
        label: "Ծառայությունների հասանելիություն",
    },
    { path: "/about/reports", label: "Հաշվետվություններ" },
    { path: "/about/regulatory-framework", label: "Իրազերկման թերթիկ" },
    { path: "/about/purchases", label: "Գնումներ" },
    { path: "/about/required-documents", label: "Անհրաժեշտ փաստաթղթեր" },
];


const RegFrame = () => {
    const location = useLocation();
    const [openAccordionId, setOpenAccordionId] = useState(null);

    const regframe = [
        {
            id: 1,
            title: "Հայաստանի Հանրապետությունում Կորոնավիրուսային հիվանդության (COVID-19) տարածման կանխարգելման նպատակով կիրառվող Իրազեկման թերթիկ",
            files: [
                {
                    name: "Իրազերկման թերթիկ",
                    file: instructionleaflet,
                },
            ],
        },
    ];

    const toggleAccordion = (id) => {
        setOpenAccordionId(openAccordionId === id ? null : id);
    };

    return (
        <>
            <HeadBar />
            <Header />
            <div className="flex">

                <div className="w-1/3 bg-gray-50 p-4 rounded-2xl shadow-lg">
                    <ul className="list-none p-0 m-0">
                        {menuItems.map((item, index) => (
                            <li
                                key={item.path}
                                className={`border-b border-gray-200 last:border-b-0`}
                            >
                                <Link
                                    to={item.path}
                                    className={`block p-4 text-base font-medium transition-colors duration-200 ${location.pathname === item.path
                                            ? "bg-indigo-50 text-indigo-700 font-semibold"
                                            : "text-gray-800 hover:bg-gray-50"
                                        }`}
                                >
                                    {index + 1}. {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="w-2/3 bg-white rounded-2xl shadow-lg p-6 mr-4">
                    {regframe.map((report) => (
                        <div
                            key={report.id}
                            className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                className="flex justify-between items-center w-full p-4 text-left text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                                onClick={() => toggleAccordion(report.id)}
                            >
                                <span>{report.title}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${openAccordionId === report.id ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>

                            {openAccordionId === report.id && (
                                <div className="p-4 bg-white">
                                    <table className="min-w-full table-auto border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="border-b px-4 py-2 text-left">Անվանում</th>
                                                <th className="border-b px-4 py-2 text-left">Ֆայլ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {report.files.map((file, index) => (
                                                <tr key={index}>
                                                    <td className="border-b px-4 py-2 font-semibold">
                                                        {file.name}
                                                    </td>
                                                    <td className="border-b px-4 py-2">
                                                        <a
                                                            href={file.file}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-indigo-600 hover:underline"
                                                        >
                                                            Բացել ֆայլը
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};


export default RegFrame;