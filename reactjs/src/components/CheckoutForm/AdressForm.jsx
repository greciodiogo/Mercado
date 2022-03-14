import React from 'react'
import {Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './CustomTextField'
const AdressForm = ({next}) => {
    const methods = useForm()
    return (
    <>0
        <Typography variant="h6" gutterBottom>Endereço de Entrega</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next(...data) )}>
                <Grid container spacing={3}>
                    <FormInput required name='firstName' label='Primeiro Nome'/>
                    <FormInput required name='lastName' label='Ultimo Nome'/>
                    <FormInput required name='address1' label='Address'/>
                    <FormInput required name='email' label='Email'/>
                    <FormInput required name='morada' label='morada'/>
                </Grid>
            </form>
            <br/>
            <div style={{display:"flex", justifyContent:"space-between" }}>
                <Button variant='outlined'>Voltar</Button>
                <Button type='submit' variant='contained' color='primary'>Avançar</Button>
            </div>
        </FormProvider>
    </>
  )
}

export default AdressForm
