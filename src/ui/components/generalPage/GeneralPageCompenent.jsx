import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { node, string } from 'prop-types'
import { Divider } from '@mui/material'
import { Box } from '@mui/system'
function GeneralPageCompenent({title,subtitle}) {
  return (
    <Box pt={2} mt={4} ml={2}>
    <Typography variant='h2' component="h1">{title}</Typography>
    <Typography  variant='h5' component="h2">{subtitle}</Typography>
    <Divider sx={{ my: 2 }}></Divider>
</Box>
  )
}
GeneralPageCompenent.propType={
  children:node.isRequired,
  title:string.isRequired,
  subtitle:string.isRequired
}
export default GeneralPageCompenent
