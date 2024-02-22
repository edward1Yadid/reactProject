import { Box, Button, Typography } from '@mui/material'
import { node, string } from 'prop-types'
import React from 'react'
import { Link } from "react-router-dom";

function NavbarNevigation({children,to,
}) {
  return (
<Link to={to} >
    {children}
</Link>
  )
}
NavbarNevigation.ptopTypes={
    children:node.isRequired,
    to: string.isRequired,
}
export default NavbarNevigation
