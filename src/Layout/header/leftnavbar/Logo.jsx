import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NavigateToComponents from '../../../core/router/NavigateToComponents'


function Logo({to}) {
  return (

<Link to={NavigateToComponents.HomePage}>
<IconButton size='large' edge="start"  >
  <Typography variant="h2" component={"h2"} color="white" sx={{fontWeight:400}} >
    Bcard
  </Typography>
</IconButton>
</Link>

  )
}

export default Logo
