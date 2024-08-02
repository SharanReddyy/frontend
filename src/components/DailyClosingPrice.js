// // src/components/DailyClosingPrice.js
// "use client";
// const DailyClosingPrice = ({ data }) => {
//     return (
//         <div>
//             <h2 className="text-xl mb-4">Daily Closing Prices</h2>
//             <table className="min-w-full bg-white">
//                 <thead>
//                     <tr>
//                         <th className="py-2 px-4 border">Symbol</th>
//                         <th className="py-2 px-4 border">Date</th>
//                         <th className="py-2 px-4 border">Close Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((stock) => (
//                         <tr key={`${stock.symbol}-${stock.date}`}>
//                             <td className="py-2 px-4 border">{stock.symbol}</td>
//                             <td className="py-2 px-4 border">{stock.date}</td>
//                             <td className="py-2 px-4 border">{stock.close}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default DailyClosingPrice;

"use client";

const DailyClosingPrice = ({ data }) => {
    const latestDate = data.reduce((latest, stock) => {
        return new Date(stock.date) > new Date(latest) ? stock.date : latest;
    }, data[0]?.date);

    const filteredData = data.filter(stock => stock.date === latestDate);

    return (
        <div>
            {/* <h2 className="text-xl mb-4">Daily Closing Prices</h2> */}
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">Symbol</th>
                        <th className="py-2 px-4 border">Date</th>
                        <th className="py-2 px-4 border">Close Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((stock) => (
                        <tr key={`${stock.symbol}-${stock.date}`}>
                            <td className="py-2 px-4 border">{stock.symbol}</td>
                            <td className="py-2 px-4 border">{stock.date}</td>
                            <td className="py-2 px-4 border">{stock.close}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DailyClosingPrice;
