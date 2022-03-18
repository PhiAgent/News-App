import React from 'react';
import TextField from '@mui/material/TextField';

type Props = {
  onChange: (e: any) => void
  name: string | undefined;
  label: string | undefined;
  value: string | undefined;
  error: boolean | undefined;
  helperText: string | undefined;
}

const Input = ({ name, label, value, error, onChange, helperText }: Props) => {

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  )
}

export default Input;