import React from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useFrom, FormProvider} from 'rect-hook-form'
import FormInput from './CustomTextField'
import { Link } from 'react-router-dom'

const AdressForm = ({next}) => {
    const methods = useForm()
    return (
    <>
        <Typography variant="h6" gutterBottom>Endereço de Entrega</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next(...data) )}>
                <Grid container spacing={3}>
                    <FormInpput required name='firstName' label='Primeiro Nome'/>
                    <FormInpput required name='lastName' label='Ultimo Nome'/>
                    <FormInpput required name='address1' label='Address'/>
                    <FormInpput required name='email' label='Email'/>
                    <FormInpput required name='morada' label='morada'/>
                </Grid>
            </form>
            <br/>
            <div style={{display:"flex", justifyContent:"space-between" }}>
                <Button component={Link} variant='outlined'>Voltar</Button>
                <Button type='submit' variant='contained' color='primary'>Avançar</Button>
            </div>
        </FormProvider>
    </>
  )
}

export default AdressForm
