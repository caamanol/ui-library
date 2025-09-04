import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ value, onChange, placeholder = 'Buscar…', className = '' }) {
  return (
    <TextField
      className={className}
      size="small"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        )
      }}
    />
  );
}
