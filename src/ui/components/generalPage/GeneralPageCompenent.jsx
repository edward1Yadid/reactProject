import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { node, string } from 'prop-types'
import { Divider } from '@mui/material'
function GeneralPageCompenent({title,subtitle}) {
  return (
 <Container maxWidth="xl"  sx={{display:"flex",
 flexDirection:"column",justifyContent:"center",gap:"1rem", marginBottom:"20px"}}>
  
    <Typography  variant="h2" color="indianred" >{title}</Typography>
    <Divider></Divider>
    <Typography variant="h4" color="initial" >{subtitle}</Typography>
    <Divider></Divider>
 </Container>
  )
}
GeneralPageCompenent.propType={
  children:node.isRequired,
  title:string.isRequired,
  subtitle:string.isRequired
}
export default GeneralPageCompenent
