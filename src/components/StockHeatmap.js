// src/components/StockHeatmap.js

import React, { useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { HeatMap } from 'react-chartjs-2';
import { fetchPriceChangePercentage } from '../utils/api';

Chart.register(...registerables);

const StockHeatmap = () => {
    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchPriceChangePercentage();
                const processedData = processData(result);
                setData(processedData.data);
                setLabels(processedData.labels);
            } catch (error) {
                console.error('Error fetching price change percentage data:', error);
            }
        };

        fetchData();
    }, []);

    const processData = (result) => {
        // Assuming result is an array of objects with structure:
        // [{ symbol: 'AAPL', period: '24h', change_percent: 1.23 }, ...]
        const labels = result.map(item => item.symbol);
        const data = result.map(item => item.change_percent);
        return { labels, data };
    };

    const heatmapData = {
        labels: labels,
        datasets: [
            {
                label: 'Price Change Percentage',
                data: data,
                backgroundColor: (context) => {
                    const value = context.dataset.data[context.dataIndex];
                    const alpha = Math.min(1, Math.abs(value) / 100);  // Normalize between 0 and 1
                    return value >= 0 ? `rgba(75, 192, 192, ${alpha})` : `rgba(255, 99, 132, ${alpha})`;
                },
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1
            }
        ]
    };

    return (
        <div>
            <h2>Stock Price Change Percentage Heatmap</h2>
            <HeatMap data={heatmapData} />
        </div>
    );
};

export default StockHeatmap;
