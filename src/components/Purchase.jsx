import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Նկարների իմպորտներ (պահպանվում են, քանի որ օգտագործվում են նաև այստեղ)
import pur1 from "../assets/Screenshot 2025-10-05 111053.png";
import pur2 from "../assets/Screenshot 2025-10-05 111111.png";
import pur3 from "../assets/Screenshot2025-10-05 111019.png";

// HeadBar, Header, Footer կոմպոնենտները ներմուծվում են այստեղ
import HeadBar from "./headBar";
import Header from "./Header";
import Footer from "./footer";

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

// Աղյուսակի տողի կոմպոնենտ՝ կրկնությունը խուսափելու համար
const TableRow = ({ row }) => (
  <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-pre-wrap">{row.name}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{row.type}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{row.declarationDate}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{row.endDate}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{row.status}</p>
    </td>
  </tr>
);

const Purchases = () => {
  const location = useLocation();

  const allTableData = [
    {
      title: "Առաջարկությունների բաց հարցում",
      data: [
        {
          name: "«ՋԻԷՄ-ԱԼՖԱ» ՓԲԸ ՀՀ Կոտայքի մարզ, ք. Աբովյան, Կարմիր բանակի 7 հասցեում գտնվող տվյալների պահպանման կենտրոնին հարող 750մ² երկարությամբ ճանապարհի հիմնանորոգման աշխատանքների կատարման առաջարկությունների բաց հարցում",
          type: "Առաջարկությունների բաց հարցում",
          declarationDate: "22/03/2024",
          endDate: "11/04/2024 ժամը 10:00",
          status: "ավարտված",
        },
      ],
    },
    {
      title: "Առաջարկությունների բաց հարցում", 
      data: [
        {
          name: "«ՋԻԷՄ-ԱԼՖԱ» ՓԲԸ ՓԲ ընկերության կարիքների համար Կոտայքի մարզ, համայնք Աբովյան, գյուղ Բալահովիտ, տարածքի քանակակշռային 6-րդ շարքի 1/1 հասցեում, 110/35 կվ լարման 2500 կՎԱ հզորությամբ տրանսֆորմատորային ենթակայանի (110 կՎ շարքի 1/1) կոմպլեքսային կայանի 35 կՎ բաց հարցումների տեղադրման աշխատանքների կատարման առաջարկությունների բաց հարցում",
          type: "Առաջարկությունների բաց հարցում",
          declarationDate: "20/03/2024",
          endDate: "9/04/2024 ժամը 10:00",
          status: "ավարտված",
        },
      ],
    },
    {
      title: "Առաջարկությունների բաց հարցում",
      data: [
        {
          name: "«ՋԻԷՄ-ԱԼՖԱ» ՓԲԸ ՓԲ ընկերության կարիքների համար ՀՀ Կոտայքի մարզ, ք. Աբովյան, Կարմիր բանակի փողոցի 7 հասցեում, արտադրամասի և հետնամասի (էջ. ենթասնուցման, ցանցամասի և հենակետերի) կառուցման աշխատանքների կատարման առաջարկությունների բաց հարցում",
          type: "Առաջարկությունների բաց հարցում",
          declarationDate: "02/06/2023",
          endDate: "16/06/2023",
          status: "ավարտված",
        },
      ],
    },
  ];

  const images = [
    { id: 1, src: pur1, alt: "Բաց հարցման ընթացակարգ" },
    { id: 2, src: pur2, alt: "Բաց հարցման փաստաթղթեր" },
    { id: 3, src: pur3, alt: "Բաց հարցման արդյունքներ" },
  ];

  return (
    <>
      <HeadBar />
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        <aside className="w-full md:w-1/4 lg:w-1/5 p-4 md:p-6 bg-white shadow-lg md:rounded-tr-2xl md:rounded-br-2xl mb-6 md:mb-0">
          <ul className="list-none p-0 m-0">
            {menuItems.map((item, index) => (
              <li
                key={item.path}
                className={`border-b border-gray-200 last:border-b-0`}
              >
                <Link
                  to={item.path}
                  className={`block p-3 text-base font-medium transition-colors duration-200 rounded-md ${
                    location.pathname === item.path
                      ? "bg-indigo-100 text-indigo-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {index + 1}. {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>


        <main className="flex-1 p-4 md:p-6">
          {allTableData.map((tableSection, sectionIndex) => (
            <section key={sectionIndex} className="mb-12 bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                {tableSection.title}
              </h1>
              <div className="overflow-x-auto">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Անվանում
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Գործողության տեսակ
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Հայտարարության և ամփոփման ամսաթիվ
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Ավարտի ամսաթիվ
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Գործողության կարգավիճակ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableSection.data.map((row, rowIndex) => (
                      <TableRow key={rowIndex} row={row} />
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Purchases;