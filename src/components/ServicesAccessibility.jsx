import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
    { path: '/about/services_accessibility', label: 'Ծառայությունների հասանելիություն' },
    { path: '/about/reports', label: 'Հաշվետվություններ' },
    { path: '/about/regulatory-framework', label: 'Իրավակարգավորման թերթիկ' },
    { path: '/about/purchases', label: 'Գնումներ' },
    { path: '/about/required-documents', label: 'Անհրաժեշտ փաստաթղթեր' },
];

// Տվյալներ աղյուսակի համար
const tableData = [
    { region: 'Աբովյան', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Ավան', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Արաբկիր', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Դավթաշեն', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Էրեբունի', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Կենտրոն', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Մալաթիա-Սեբաստիա', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Նոր Նորք', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Նորք-Մարաշ', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Նուբարաշեն', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Շենգավիթ', voip: 'VOIP', gpon: 'GPON/MPLS' },
    { region: 'Քանաքեռ-Զեյթուն', voip: 'VOIP', gpon: 'MPLS' },
];

const services_accessibility = () => {
    const location = useLocation();

    return (
        <>
            <div className="flex">

                <div className="w-1/3 bg-white rounded-2xl shadow-lg p-0 mr-4">
                    <ul className="list-none p-0 m-0">
                        {menuItems.map((item, index) => (
                            <li
                                key={item.path}
                                className={`border-b border-gray-200 last:border-b-0`}
                            >
                                <Link
                                    to={item.path}
                                    className={`block p-4 text-base font-medium transition-colors duration-200
                                            ${location.pathname === item.path ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-800 hover:bg-gray-50'}`}
                                >
                                    {index + 1}. {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-2/3 bg-white rounded-2xl shadow-lg p-6 overflow-y-auto max-h-[90vh] text-gray-700 text-sm leading-relaxed">
                    <h2 className="text-xl font-semibold mb-4">Մեր ցանցը</h2>
                    <p>
                        Մեր ցանցը հիմնված է օպտիկամանրաթելային ենթակառուցվածքի վրա և կառուցված է ստորգետնյա տեղակայման եղանակով՝ միացնելով Հայաստանը արտաքին աշխարհի հետ Վրաստանի և Իրանի սահմաններով:
                    </p>
                    <p className="mt-2">
                        OVIO-ի ցանցը Հայաստանում եզակի է իր կառուցվածքային հնարավորություններով և առավելություններով՝
                        <ul className="list-disc list-inside mt-1 ml-4">
                            <li>տվյալների հաղորդման օպտիկական համակարգեր</li>
                            <li>ավելին քան 3000 կմ երկարություն</li>
                            <li>92% ներկայություն ՀՀ քաղաքներում</li>
                            <li>համացանցին միանալու հնարավորություն մինչև 200 ԳԲ/վ արագությամբ</li>
                        </ul>
                    </p>
                    <p className="mt-2">
                        Մեր ցանցը հիմնված է օպտիկամանրաթելային ենթակառուցվածքի վրա և կառուցված է ստորգետնյա տեղակայման եղանակով՝ միացնելով Հայաստանը արտաքին աշխարհի հետ Վրաստանի և Իրանի սահմաններով:
                    </p>
                    <p className="mt-2">
                        OVIO-ն ապահովված է երեք միջազգային կապուղիներով դեպի Ռուսաստան և Եվրոպա, որոնք իրարից ֆիզիկապես և աշխարհագրորեն տարանջատված են՝ երաշխավորելով հուսալի և անխափան ծառայությունների մատուցումը:
                    </p>

                    <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">1. Երևան</h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Բնակավայր
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Ամրակցված Հեռախոս
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Ամրակցված Ինտերնետ
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {row.region}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {row.voip}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {row.gpon}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default services_accessibility;