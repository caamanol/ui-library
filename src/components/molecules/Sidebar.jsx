import React from 'react';
import Box from '@mui/material/Box';

/**
 * Sidebar layout that shows a filter area on top and a scrollable list below.
 * Props:
 * - filter: React node or component to render in the header (e.g. SearchBar or custom filter controls)
 * - children: list/content items (e.g. Cards) to render in the body
 * - className: optional className for external styling
 * - width: sidebar width (number = px or CSS string)
 * - sticky: whether the filter area stays sticky at the top
 * - headerPadding / contentPadding: spacing control
 */
export default function Sidebar({
  filter,
  children,
  className = '',
  width = 320,
  sticky = true,
  headerPadding = 2,
  contentPadding = 1,
}) {
  const headerStyles = {
    p: headerPadding,
    borderBottom: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    position: sticky ? 'sticky' : 'static',
    top: 0,
    zIndex: 1,
  };

  return (
    <Box
      className={className}
      sx={{
        width,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      {filter ? (
        <Box sx={headerStyles}>
          {typeof filter === 'function' ? React.createElement(filter) : filter}
        </Box>
      ) : null}

      <Box sx={{ flex: 1, overflowY: 'auto', p: contentPadding, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {children}
      </Box>
    </Box>
  );
}

