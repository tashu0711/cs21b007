import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const ProductList = ({ products }) => {
    return (
        <div>
            {products.map((product, index) => (
                <Card key={index} variant="outlined">
                    <CardContent>
                        <Typography variant="h5">{product.productName}</Typography>
                        <Typography>Company: {product.company}</Typography>
                        <Typography>Category: {product.category}</Typography>
                        <Typography>Price: ${product.price}</Typography>
                        <Typography>Rating: {product.rating}</Typography>
                        <Typography>Discount: {product.discount}%</Typography>
                        <Typography>Availability: {product.availability}</Typography>
                        <Link to={`/product/${product.id}`}>View Details</Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ProductList;
