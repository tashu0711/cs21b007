import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetails = ({ product }) => {
    if (!product) return <Typography>Loading...</Typography>;

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h4">{product.productName}</Typography>
                <Typography>Company: {product.company}</Typography>
                <Typography>Category: {product.category}</Typography>
                <Typography>Price: ${product.price}</Typography>
                <Typography>Rating: {product.rating}</Typography>
                <Typography>Discount: {product.discount}%</Typography>
                <Typography>Availability: {product.availability}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProductDetails;
