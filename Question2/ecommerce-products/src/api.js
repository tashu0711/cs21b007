import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/companies/${company}/categories/${category}/products`, {
            params: { top, minPrice, maxPrice }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
