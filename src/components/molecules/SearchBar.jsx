import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ value, onChange, placeholder = 'Buscar…', className = '', size = 'medium' }) {
  return (
    <TextField
      className={className}
      fullWidth
      size={size}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ ml: 0 }}>
            <Box
              sx={(theme) => ({
                pl: 1.5,
                ml: 1,
                borderLeft: `1px solid ${theme.palette.primary.main}`,
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.text.primary,
              })}
            >
              <SearchIcon />
            </Box>
          </InputAdornment>
        ),
      }}
      sx={(theme) => ({
        '& .MuiOutlinedInput-root': {
          backgroundColor: theme.palette.background.paper,
          borderRadius: 0, // borde cuadrado
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderStyle: 'solid', // línea recta
          borderColor: theme.palette.primary.main,
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main,
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main,
        },
      })}
    />
  );
}
