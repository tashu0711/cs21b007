// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import allProductsPage from './pages/allProductPage.js';
// import productPage from './pages/productPage.js';
// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" exact component={allProductsPage} />
//                 <Route path="/product/:productId" component={productPage} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/allProductPage';
import ProductPage from './pages/productPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AllProductsPage />} />
                <Route path="/product/:productId" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}

export default App;
