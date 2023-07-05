import { Box, FormControlLabel,  Switch } from '@mui/material'
import React, { useState } from 'react'

const MuiSwitch = () => {
    const [checked, setChecked]= useState(false);
    const handleChange = (e) =>{
        setChecked(e.target.checked)
    }
    console.log({checked})
  return (
    <Box>
        <h1>Mui Switch</h1>
        <Box>
            <FormControlLabel label="Dark Mode Small" control={<Switch checked={checked} onChange={handleChange} color='primary' size='small'/>}/>
            <FormControlLabel label="Dark Mode Small" control={<Switch checked={checked} onChange={handleChange} color='secondary' size='small'/>}/>
            <FormControlLabel label="Dark Mode Small" control={<Switch checked={checked} onChange={handleChange} color='error' size='small'/>}/>
            <FormControlLabel label="Dark Mode Small" control={<Switch checked={checked} onChange={handleChange} color='warning' size='small'/>}/>
            <FormControlLabel label="Dark Mode Small" control={<Switch checked={checked} onChange={handleChange} color='info' size='small'/>}/>
            <FormControlLabel label="Dark Mode Small" control={<Switch checked={checked} onChange={handleChange} color='success' size='small'/>}/>
        </Box>
        <Box>
            <FormControlLabel label="Dark Mode Medium" control={<Switch checked={checked} onChange={handleChange} color='primary' size='medium'/>}/>
            <FormControlLabel label="Dark Mode Medium" control={<Switch checked={checked} onChange={handleChange} color='secondary' size='medium'/>}/>
            <FormControlLabel label="Dark Mode Medium" control={<Switch checked={checked} onChange={handleChange} color='error' size='medium'/>}/>
            <FormControlLabel label="Dark Mode Medium" control={<Switch checked={checked} onChange={handleChange} color='warning' size='medium'/>}/>
            <FormControlLabel label="Dark Mode Medium" control={<Switch checked={checked} onChange={handleChange} color='info' size='medium'/>}/>
            <FormControlLabel label="Dark Mode Medium" control={<Switch checked={checked} onChange={handleChange} color='success' size='medium'/>}/>
        </Box>
        <Box>
            <FormControlLabel label="Dark Mode Large" control={<Switch checked={checked} onChange={handleChange} color='primary' size='large'/>}/>
            <FormControlLabel label="Dark Mode Large" control={<Switch checked={checked} onChange={handleChange} color='secondary' size='large'/>}/>
            <FormControlLabel label="Dark Mode Large" control={<Switch checked={checked} onChange={handleChange} color='error' size='large'/>}/>
            <FormControlLabel label="Dark Mode Large" control={<Switch checked={checked} onChange={handleChange} color='warning' size='large'/>}/>
            <FormControlLabel label="Dark Mode Large" control={<Switch checked={checked} onChange={handleChange} color='info' size='large'/>}/>
            <FormControlLabel label="Dark Mode Large" control={<Switch checked={checked} onChange={handleChange} color='success' size='large'/>}/>
        </Box>
    </Box>
  )
}

export default MuiSwitch