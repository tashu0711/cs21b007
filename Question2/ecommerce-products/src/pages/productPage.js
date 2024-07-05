import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api';
import ProductDetails from '../components/productDetails';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            const data = await fetchProducts(/* Add necessary parameters to fetch a specific product */);
            setProduct(data.find(p => p.id === productId));
        };

        getProduct();
    }, [productId]);

    return <ProductDetails product={product} />;
};

export default ProductPage;
