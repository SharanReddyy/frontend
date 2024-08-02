"use client";

const TopLosersGainers = ({ data }) => {
    return (
        <div>
            <h1 className="text-xl mb-4">Top Gainers and Losers today:</h1>
            <div className="flex space-x-4">
                {/* Top Gainers Table */}
                <div className="flex-1">
                    <h3 className="text-lg mb-2">Top Gainers</h3>
                    <table className="min-w-full bg-white mb-6">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border">Symbol</th>
                                <th className="py-2 px-4 border">Percentage Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.top_gainers.length > 0 ? (
                                data.top_gainers.map((stock) => (
                                    <tr key={stock.symbol}>
                                        <td className="py-2 px-4 border">{stock.symbol}</td>
                                        <td className="py-2 px-4 border text-green-600">
                                            {stock.percentage_change}%
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="py-2 px-4 border">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Top Losers Table */}
                <div className="flex-1">
                    <h3 className="text-lg mb-2">Top Losers</h3>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border">Symbol</th>
                                <th className="py-2 px-4 border">Percentage Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.top_losers.length > 0 ? (
                                data.top_losers.map((stock) => (
                                    <tr key={stock.symbol}>
                                        <td className="py-2 px-4 border">{stock.symbol}</td>
                                        <td className="py-2 px-4 border text-red-600">
                                            {stock.percentage_change}%
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="py-2 px-4 border">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TopLosersGainers;
