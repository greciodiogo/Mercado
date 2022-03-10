import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';

    const products = [
        {id:1, name:"Shoes", description:"Running Shoes", price:"$5", image:"j"},
        {id:2, name:"T-Shirts", description:"Zara Jackets", price:"$15", image:"j"},
    ];
const Products = () => {
    return(
    <main>
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products
