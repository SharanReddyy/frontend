// src/components/TreemapComponent.js
import React from 'react';
import Plot from 'react-plotly.js';

const TreemapComponent = ({ data, marketCaps }) => {
    // Map data to the format required by Plotly
    const labels = data.map(stock => stock.symbol);
    const values = data.map(stock => marketCaps[stock.symbol] || 1); // Default to 1 if market cap is missing
    const colors = data.map(stock => stock.percentage_change > 0 ? 'green' : 'red');
    const texts = data.map(stock => `${stock.symbol}<br>${stock.percentage_change}%`);

    return (
        <Plot
            data={[
                {
                    type: 'treemap',
                    labels: labels,
                    parents: Array(data.length).fill(''),  // No hierarchical structure
                    values: values,
                    text: texts,
                    marker: {
                        colors: colors,
                    },
                    textinfo: 'label+text',
                }
            ]}
            layout={{
                margin: { t: 0, l: 0, r: 0, b: 0 },
                paper_bgcolor: 'rgba(0,0,0,0)', // Transparent background
                plot_bgcolor: 'rgba(0,0,0,0)',
            }}
        />
    );
};

export default TreemapComponent;
