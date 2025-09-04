import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function DataTable({ columns, rows, emptyText = 'No hay resultados', onRowClick, rowKey = 'id' }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col.key}><strong>{col.header}</strong></TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                <Typography variant="body2" color="text.secondary">{emptyText}</Typography>
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row, idx) => (
              <TableRow
                key={(row && row[rowKey]) ?? row.id ?? idx}
                hover
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                sx={onRowClick ? { cursor: 'pointer' } : undefined}
              >
                {columns.map(col => (
                  <TableCell key={col.key}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
