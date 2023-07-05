import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'
import React, { useState } from 'react'

const MuiRadioButton = () => {
    const [value,setValue] = useState('');
    console.log({value})
    const handleChange = (e)=>{
        setValue(e.target.value)
    } 
  return (
    <Box>
        <h1>Mui Radio Button</h1>
        <FormControl error>
            <FormLabel id='job-experience-group-label'>
                Years of exprience
            </FormLabel>
            <RadioGroup name='job-experience-group' aria-label='job-experience-group-label' value={value} onChange={handleChange} row>
                <FormControlLabel control={<Radio size='small' color='primary'/>} label="0-2" value="0-2"/>
                <FormControlLabel control={<Radio size='small' color='secondary'/>} label="0-2" value="0-2"/>
                <FormControlLabel control={<Radio size='small' color='error'/>} label="0-2" value="0-2"/>
                <FormControlLabel control={<Radio size='small' color='warning'/>} label="0-2" value="0-2"/>
                <FormControlLabel control={<Radio size='small' color='success'/>} label="0-2" value="0-2"/>
                <FormControlLabel control={<Radio size='small' color='info'/>} label="0-2" value="0-2"/>
            </RadioGroup>
            
            <RadioGroup name='job-experience-group' aria-label='job-experience-group-label' value={value} onChange={handleChange} row>
                <FormControlLabel control={<Radio size='medium' color='primary'/>} label="3-5" value="3-5"/>
                <FormControlLabel control={<Radio size='medium' color='secondary'/>} label="3-5" value="3-5"/>
                <FormControlLabel control={<Radio size='medium' color='error'/>} label="3-5" value="3-5"/>
                <FormControlLabel control={<Radio size='medium' color='warning'/>} label="3-5" value="3-5"/>
                <FormControlLabel control={<Radio size='medium' color='success'/>} label="3-5" value="3-5"/>
                <FormControlLabel control={<Radio size='medium' color='info'/>} label="3-5" value="3-5"/>
            </RadioGroup>
            
            <RadioGroup name='job-experience-group' aria-label='job-experience-group-label' value={value} onChange={handleChange} row>
                <FormControlLabel control={<Radio size='large' color='primary'/>} label="6-10" value="6-10"/>
                <FormControlLabel control={<Radio size='large' color='secondary'/>} label="6-10" value="6-10"/>
                <FormControlLabel control={<Radio size='large' color='error'/>} label="6-10" value="6-10"/>
                <FormControlLabel control={<Radio size='large' color='warning'/>} label="6-10" value="6-10"/>
                <FormControlLabel control={<Radio size='large' color='success'/>} label="6-10" value="6-10"/>
                <FormControlLabel control={<Radio size='large' color='info'/>} label="6-10" value="6-10"/>
            </RadioGroup>
            <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton