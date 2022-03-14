import { List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React from 'react'

const Review = ({checkoutToken}) => {
  return (
    <>
      <Typography variant='h2' gutterBottom >Resumo do Pedido</Typography>
      <List disablePadding >
          {checkoutToken.live.line_items.map((product) => {
        <ListItem style={{padding:'10px 0'}} key={product.name}> 
            <ListItemText primary={product.name} secondary={`Quantidade: ${product.quantity}`}/>
            <Typography variant="body2">{product.line_total.formatted_with_code}</Typography>
        </ListItem>
        })}
        <ListItem style={{padding:"10px 0"}}>
            <ListItemText primary="Total">
                <Typography>
                    {checkoutToken.live.subtotal.formatted_with_code}
                </Typography>
            </ListItemText>
        </ListItem>
      </List>
    </>
  )
}

export default Review
