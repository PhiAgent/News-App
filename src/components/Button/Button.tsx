import React from 'react';
import {Button as MuiButton} from '@mui/material';

type Props = {
  text: "text" | "contained" | "outlined" | undefined;
  // onClick: () => void
  size: "small" | "large" | "medium" | undefined;
  variant: "text" | "contained" | "outlined" | undefined;
  color: "inherit" | "primary" | "success" | "secondary" | "error" | "info" | "warning" | undefined;
  other: any;
}

const Button = ({text, size, color, variant, other}: Props) => {

  return(
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      // onClick={onClick}
      disableElevation
      {...other}
    >
      {text}
    </MuiButton>
  )
}

export default Button;