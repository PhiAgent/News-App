import React from 'react';
import {Button as MuiButton} from '@mui/material';

type Props = {
  message: string | undefined;
  onClick: (e: any) => void
  size: "small" | "large" | "medium" | undefined;
  variant: "text" | "contained" | "outlined" | undefined;
  color: "inherit" | "primary" | "success" | "secondary" | "error" | "info" | "warning" | undefined;
}

const Button = ({ message, size, color, variant, onClick}: Props) => {

  return(
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      disableElevation
    >
      {message}
    </MuiButton>
  )
}

export default Button;