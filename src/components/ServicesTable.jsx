import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
    { path: '/about/services_accessibility', label: 'Ծառայությունների հասանելիություն' },
    { path: '/about/reports', label: 'Հաշվետվություններ' },
    { path: '/about/regulatory-framework', label: 'Իրավակարգավորման թերթիկ' },
    { path: '/about/purchases', label: 'Գնումներ' },
    { path: '/about/required-documents', label: 'Անհրաժեշտ փաստաթղթեր' },
];


const accordionData = [
    {
        id: 'yerevan',
        title: '1. Երևան',
        regions: [
            { name: 'Աբովյան', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Ավան', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Արաբկիր', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Դավթաշեն', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Էրեբունի', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Կենտրոն', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Մալաթիա-Սեբաստիա', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Նոր Նորք', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Նորք-Մարաշ', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Նուբարաշեն', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Շենգավիթ', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Քանաքեռ-Զեյթուն', voip: 'VOIP', gpon: 'MPLS' },
        ],
    },
    {
        id: 'aragatsotn',
        title: '2. Արագածոտնի մարզ',
        regions: [
            { name: 'Աշտարակ', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Ապարան', voip: 'VOIP', gpon: 'MPLS' },
            { name: 'Թալին', voip: 'VOIP', gpon: 'MPLS' },
            { name: 'Ծաղկահովիտ', voip: 'VOIP', gpon: 'MPLS' }
        ],
    },
    {
        id: 'ararat',
        title: '3. Արարատի մարզ',
        regions: [
            { name: 'Արտաշատ', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Արարատ', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Մասիս', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Վեդի',voip: 'VOIP', gpon: 'MPLS'}
        ],
    },
    {
        id: 'armavir',
        title: '4. Արմավիրի մարզ',
        regions: [
            { name: 'Մեծամոր', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Արմավիր', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Վաղարշապատ', voip: 'VOIP', gpon: 'MPLS' },
            { name: 'Բաղրամյան', voip: 'VOIP', gpon: 'MPLS' },
        ],
    },
    {
        id: 'gegharkunik',
        title: '5. Գեղարքունիքի մարզ',
        regions: [
            { name: 'Գավառ', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Սևան', voip: 'VOIP', gpon: 'GPON/MPLS' },
        ],
    },
    {
        id: 'lori',
        title: '6. Լոռու մարզ',
        regions: [
            { name: 'Վանաձոր', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Սպիտակ', voip: 'VOIP', gpon: 'GPON/MPLS' },
        ],
    },
    {
        id: 'shirak',
        title: '7. Շիրակի մարզ',
        regions: [
            { name: 'Գյումրի', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Արթիկ', voip: 'VOIP', gpon: 'GPON/MPLS' },
        ],
    },
    {
        id: 'vayots_dzor',
        title: '8. Վայոց Ձորի մարզ',
        regions: [
            { name: 'Եղեգնաձոր', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Ջերմուկ', voip: 'VOIP', gpon: 'GPON/MPLS' },
        ],
    },
    {
        id: 'syunik',
        title: '9. Սյունիքի մարզ',
        regions: [
            { name: 'Կապան', voip: 'VOIP', gpon: 'GPON/MPLS' },
            { name: 'Գորիս', voip: 'VOIP', gpon: 'GPON/MPLS' },
        ],
    },
];

const ServicesTable = () => {
    const location = useLocation();


    const [openAccordionId, setOpenAccordionId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordionId(openAccordionId === id ? null : id);
    };

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

                    {location.pathname === '/about/services_accessibility' && (
                        <>
                            <h2 className="text-xl font-semibold mb-4">Մեր ցանցը</h2>
                            <p>
                                Մեր ցանցը հիմնված է օպտիկամանրաթելային ենթակառուցվածքի վրա և կառուցված է ստորգետնյա տեղակայման եղանակով՝ միացնելով Հայաստանը արտաքին աշխարհի հետ Վրաստանի և Իրանի սահմաններով:
                            </p>
                            <p className="mt-2">
                                OVIO-ի ցանցը Հայաստանում եզակի է իր կառուցվածքային հնարավորություններով և առավելություններով՝ 
                            </p>
                                <ul className="list-disc list-inside mt-1 ml-4">
                                    <li>տվյալների հաղորդման օպտիկական համակարգեր</li>
                                    <li>ավելին քան 3000 կմ երկարություն</li>
                                    <li>92% ներկայություն ՀՀ քաղաքներում</li>
                                    <li>համացանցին միանալու հնարավորություն մինչև 200 ԳԲ/վ արագությամբ</li>
                                </ul>
                           
                            <p className="mt-2">
                                Մեր ցանցը հիմնված է օպտիկամանրաթելային ենթակառուցվածքի վրա և կառուցված է ստորգետնյա տեղակայման եղանակով՝ միացնելով Հայաստանը արտաքին աշխարհի հետ Վրաստանի և Իրանի սահմաններով:
                            </p>
                            <p className="mt-2">
                                OVIO-ն ապահովված է երեք միջազգային կապուղիներով դեպի Ռուսաստան և Եվրոպա, որոնք իրարից ֆիզիկապես և աշխարհագրորեն տարանջատված են՝ երաշխավորելով հուսալի և անխափան ծառայությունների մատուցումը:
                            </p>


                            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                                    Ծառայությունների հասանելիություն՝ ըստ տարածաշրջանների
                                </h2>

                                {accordionData.map((item) => (
                                    <div key={item.id} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">

                                        <button
                                            className="flex justify-between items-center w-full p-4 text-left text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                                            onClick={() => toggleAccordion(item.id)}
                                        >
                                            <span>{item.title}</span>

                                            <svg
                                                className={`w-5 h-5 transition-transform duration-300 ${openAccordionId === item.id ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>


                                        {openAccordionId === item.id && (
                                            <div className="p-4 bg-white">
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
                                                        {item.regions.map((region, idx) => (
                                                            <tr key={idx}>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                    {region.name}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                    {region.voip}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                    {region.gpon}
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
                        </>
                    )}

                </div>
            </div>
        </>
    )
}

export default ServicesTable;