import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

const Filter = ({ onFilter }) => {
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [rating, setRating] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [availability, setAvailability] = useState('');

    const handleFilter = () => {
        onFilter({ category, company, rating, minPrice, maxPrice, availability });
    };

    return (
        <div>
            <TextField select label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
                {/* Add categories */}
                <MenuItem value="Phone">Phone</MenuItem>
                <MenuItem value="Computer">Computer</MenuItem>
                {/* Add more categories */}
            </TextField>
            <TextField select label="Company" value={company} onChange={(e) => setCompany(e.target.value)}>
                <MenuItem value="AMZ">AMZ</MenuItem>
                <MenuItem value="FLP">FLP</MenuItem>
                {/* Add more companies */}
            </TextField>
            <TextField label="Rating" type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
            <TextField label="Min Price" type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <TextField label="Max Price" type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            <TextField select label="Availability" value={availability} onChange={(e) => setAvailability(e.target.value)}>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
            </TextField>
            <Button onClick={handleFilter}>Filter</Button>
        </div>
    );
};

export default Filter;
