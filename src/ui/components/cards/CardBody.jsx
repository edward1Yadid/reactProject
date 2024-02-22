import { CardContent ,Typography,Box, CardHeader, Divider,} from '@mui/material'

import React from 'react'

function CardBody({card}) {
  const { title, subtitle, phone, } = card;
  return (
<>
<CardContent  >
  <CardHeader title={title} subheader={subtitle}   sx={{display:"flex",alignItems:"start",flexDirection:"column",justifyContent:"start",color:"black"}} ></CardHeader>
  <Divider/>
  <Box sx={{display:"flex",alignItems:"start",flexDirection:"column",justifyContent:"start" }}>
  <Typography variant="body2" color="black" fontSize={"2rem"}>
     title: {title}
        </Typography>
        <Typography  variant="body2" color="black" fontSize={"2rem"}>
        subtitle: {subtitle} 
        </Typography>
        <Typography  variant="body2" color="black" fontSize={"2rem"}>
        phone: {phone}
        </Typography>
  </Box>
  </CardContent>



</>
  )
}

export default CardBody