import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';  // Your Django backend base URL

export const fetchDailyClosingPrice = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/daily_closing_price/`);
    return response.data;
};

export const fetchPriceChangePercentage = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/price_change_percentage/`);
    return response.data;
};

export const fetchTopGainersLosers = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/top_gainers_losers/`);
    return response.data;
};
