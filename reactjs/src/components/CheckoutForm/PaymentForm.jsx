import { Divider, Typography } from '@material-ui/core';
import React from 'react'
import Review from './Review';

const PaymentForm = ({checkoutToken,backStep}) => {
  return (
    <>
     <Review checkoutToken={checkoutToken}/>
     <Divider/>
     <Typography variant='h6' gutterBottom style={{margin:'20px 0'}}>Métoddos de Pagamento</Typography>
     <div style={{display:flex, justifyContent:'space-between' }}>
         <Button variant="outlined" onclick={backStep}>Voltar</Button>
         <Button variant="contained"  color="primary">
             Pagar {checkoutToken.live.subtotal.formatted_with_code}
         </Button>

     </div>
    </>
  )
}

export default PaymentForm;