import Button from '@mui/material/Button'
import { bool, func, node, string } from 'prop-types'
const ButtonsForm = ({
    variant, component, size, color, onClick, disabled, node
}) => {
    return (
        <Button
            variant={variant}
            component={component}
            size={size}
            color={color}
            onClick={onClick}
            disabled={disabled}
            fullWidth
        >
            {node}
        </Button>
    )
}



ButtonsForm.defaultProps = {
  variant: 'filled',
    size: 'large',
    color: 'primary',
    disabled: false
}

ButtonsForm.propTypes={
  variant:string.isRequired,
  component:string.isRequired,
  onclick:func.isRequired,
  disabled:bool.isRequired,
  node:node.isRequired
}

export default ButtonsForm