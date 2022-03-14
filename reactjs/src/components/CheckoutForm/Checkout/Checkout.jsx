import React, { useEffect, useState } from 'react'
import {Paper, Step, StepLabel, Typography, Stepper} from '@material-ui/core'
import { commerce } from '../../../lib/commerce'
import useStyles from './styles'
import AdressForm from '../AdressForm'
import PaymentForm from '../PaymentForm'

const steps = ['Entrega do Produto', "Detalhes do Pagamento"]
const Checkout = ({cart}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] =useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})

    useEffect(() =>{
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type:'cart'})
                setCheckoutToken(token)
            } catch (error) {
                
            }
        }
        generateToken()
    }, [cart]);
    const nextStep = () => setActiveStep( (prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep( (prevActiveStep) => prevActiveStep - 1)
    const next = (data) => {
        setShippingData(data);
        nextStep();
    }
    const Confirmation = () => (
        <div>
            Compra Efectuada
        </div>
    )
    const Form = () => activeStep === 0
    ? <AdressForm checkoutToken={checkoutToken} next={next}/>
    : <PaymentForm checkoutToken={checkoutToken} backStep={backStep} shippingData={shippingData}/>

  return (
      <>
        <div className={classes.toolbar}>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align='center' >Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation/> : <Form/>}
                </Paper>
            </main>
        </div>
      </>
  )
}

export default Checkout
