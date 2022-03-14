import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'
// import produto1 from '../../assets/IMG-20220125-WA0024.jpg'
// import produto2 from '../../assets/IMG-20220205-WA0003.jpg'
// import produto3 from '../../assets/IMG-20220205-WA0007.jpg'

    // const products = [
    //     {id:1, name:"Iphone Xr", description:"Iphone", price:"150.000 kz", image:produto2},
    //     {id:2, name:"Iphone 11", description:"Iphone", price:"200.000kz", image:produto3},
    //     {id:3, name:"Iphone 11 Pro Max", description:"Iphone", price:"280.000kz", image:produto1},
   
    // ];
const Products = ({products, onAddToCart}) => {
    const classes= useStyles();
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products
