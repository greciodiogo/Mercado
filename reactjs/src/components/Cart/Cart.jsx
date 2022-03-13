import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'

const Cart  = ({cart}) => {
    const isEmpty = true
    const EmptyCart = () => (
        <Typography variant="subtitle1">Não existem itens adicionados no Carrinho</Typography>
    )
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
        </>
    )
  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3"> Your Shopping Cart</Typography>
        {isEmpty ? <EmptyCart /> : <FilledCart/>}
    </Container>
  )
}

export default Cart
