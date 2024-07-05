import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductList from '../components/productList';
import Filter from '../components/Filter';

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filterParams, setFilterParams] = useState({
        category: 'Laptop',
        company: 'AMZ',
        top: 10,
        minPrice: 1,
        maxPrice: 1000
    });

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts(
                filterParams.company,
                filterParams.category,
                filterParams.top,
                filterParams.minPrice,
                filterParams.maxPrice
            );
            setProducts(data);
        };

        getProducts();
    }, [filterParams]);

    const handleFilter = (params) => {
        setFilterParams({
            ...filterParams,
            ...params
        });
    };

    return (
        <div>
            <Filter onFilter={handleFilter} />
            <ProductList products={products} />
        </div>
    );
};

export default AllProductsPage;
