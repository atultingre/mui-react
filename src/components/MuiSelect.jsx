import React, { useState } from 'react'
import {Box,TextField, MenuItem} from "@mui/material"

const MuiSelect = () => {
  const [countries,setCountries] = useState([])
  console.log(countries)
  const handleChange = (e)=>{
    const value = e.target.value
    setCountries(typeof value === 'string' ? value.split(','): value)
  }

  return (
    <Box width='250px'>
        <h1>Mui Select</h1>
        <TextField label="Select country" select value={countries} onChange={handleChange} fullWidth SelectProps={{
          multiple:true
        }} color='secondary' size='small' helperText='Please Select your country' error>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Austraia</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect