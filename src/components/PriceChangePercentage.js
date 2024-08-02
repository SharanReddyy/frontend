// "use client";

// const PriceChangePercentage = ({ data }) => {
//     // Extract the relevant data for each period
//     const data24h = data['24h'] || [];
//     const data30d = data['30d'] || [];
//     const data1y = data['1y'] || [];

//     return (
//         <div>
//             <h2 className="text-xl mb-4">Price Change Percentage</h2>

//             <h3 className="text-lg mb-2">Last 24 Hours</h3>
//             <table className="min-w-full bg-white mb-6">
//                 <thead>
//                     <tr>
//                         <th className="py-2 px-4 border">Symbol</th>
//                         <th className="py-2 px-4 border">Current Price</th>
//                         <th className="py-2 px-4 border">Change (%)</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data24h.length > 0 ? (
//                         data24h.map((stock) => (
//                             <tr key={stock.symbol}>
//                                 <td className="py-2 px-4 border">{stock.symbol}</td>
//                                 <td className="py-2 px-4 border">{stock.current_price}</td>
//                                 <td className="py-2 px-4 border">{stock.percentage_change}%</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="3" className="py-2 px-4 border">No data available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>

//             <h3 className="text-lg mb-2">Last 30 Days</h3>
//             <table className="min-w-full bg-white mb-6">
//                 <thead>
//                     <tr>
//                         <th className="py-2 px-4 border">Symbol</th>
//                         <th className="py-2 px-4 border">Current Price</th>
//                         <th className="py-2 px-4 border">Change (%)</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data30d.length > 0 ? (
//                         data30d.map((stock) => (
//                             <tr key={stock.symbol}>
//                                 <td className="py-2 px-4 border">{stock.symbol}</td>
//                                 <td className="py-2 px-4 border">{stock.current_price}</td>
//                                 <td className="py-2 px-4 border">{stock.percentage_change}%</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="3" className="py-2 px-4 border">No data available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>

//             <h3 className="text-lg mb-2">Last 1 Year</h3>
//             <table className="min-w-full bg-white">
//                 <thead>
//                     <tr>
//                         <th className="py-2 px-4 border">Symbol</th>
//                         <th className="py-2 px-4 border">Current Price</th>
//                         <th className="py-2 px-4 border">Change (%)</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data1y.length > 0 ? (
//                         data1y.map((stock) => (
//                             <tr key={stock.symbol}>
//                                 <td className="py-2 px-4 border">{stock.symbol}</td>
//                                 <td className="py-2 px-4 border">{stock.current_price}</td>
//                                 <td className="py-2 px-4 border">{stock.percentage_change}%</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="3" className="py-2 px-4 border">No data available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default PriceChangePercentage;

"use client";

import { useState } from 'react';

const PriceChangePercentage = ({ data }) => {
    const [selectedPeriod, setSelectedPeriod] = useState('24h');

    // Extract the relevant data for each period
    const data24h = data['24h'] || [];
    const data30d = data['30d'] || [];
    const data1y = data['1y'] || [];

    const getTableData = () => {
        switch (selectedPeriod) {
            case '30d':
                return data30d;
            case '1y':
                return data1y;
            case '24h':
            default:
                return data24h;
        }
    };

    const tableData = getTableData();

    return (
        <div>
            {/* <h2 className="text-xl mb-4">Price Change Percentage</h2> */}

            <div className="mb-4">
                <button
                    className={`py-2 px-4 mr-2 rounded ${selectedPeriod === '24h' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedPeriod('24h')}
                >
                    Last 24 Hours
                </button>
                <button
                    className={`py-2 px-4 mr-2 rounded ${selectedPeriod === '30d' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedPeriod('30d')}
                >
                    Last 30 Days
                </button>
                <button
                    className={`py-2 px-4 rounded ${selectedPeriod === '1y' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedPeriod('1y')}
                >
                    Last 1 Year
                </button>
            </div>

            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">Symbol</th>
                        <th className="py-2 px-4 border">Current Price</th>
                        <th className="py-2 px-4 border">Change (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.length > 0 ? (
                        tableData.map((stock) => (
                            <tr key={stock.symbol}>
                                <td className="py-2 px-4 border">{stock.symbol}</td>
                                <td className="py-2 px-4 border">{stock.current_price}</td>
                                <td className="py-2 px-4 border">{stock.percentage_change}%</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="py-2 px-4 border">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PriceChangePercentage;
