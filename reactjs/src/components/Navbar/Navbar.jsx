import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/Logo_Mercado.png'

import useStyles from './styles'

const Navbar = ({totalItems}) => {
  const classes =useStyles();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color="inherit">
        <Toolbar>
            <Typography variant="h6" className={classes.title} color="secondary">
                <img src={logo} alt="commerce.js" height="25px" className={classes.image} />
                Mercado
            </Typography>
            <div className={classes.grow} /> 
            <div className={classes.button} >
                <IconButton arial-label="Show cart items" color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart/>  
                  </Badge>
                </IconButton>
            </div> 
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
