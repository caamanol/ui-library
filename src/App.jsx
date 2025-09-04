import React, { useEffect, useMemo, useState } from 'react';
import * as Screens from './index.js';
import {
  Box,
  Typography,
  TextField,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';

const screens = Object.keys(Screens).sort();

export default function App() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(screens[0] || null);

  const filtered = useMemo(() => screens.filter(s => s.toLowerCase().includes(query.toLowerCase())), [query]);

  const Active = active ? Screens[active] : () => <div className="p-8">No hay pantallas.</div>;

  // Hash-based routing: #/ScreenName
  useEffect(() => {
    function syncFromHash() {
      const name = decodeURIComponent((window.location.hash || '').replace(/^#\/?/, ''));
      if (name && Screens[name]) {
        setActive(name);
      }
    }
    // Initial sync
    syncFromHash();
    // Listen for changes
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  function navigate(name) {
    setActive(name);
    window.location.hash = `/${encodeURIComponent(name)}`;
  }

  return (
    <Box display="grid" gridTemplateColumns="280px 1fr" height="100vh">
      <Paper elevation={0} sx={{ borderRight: 1, borderColor: 'divider', p: 2, overflow: 'auto' }} component="aside">
        <Typography variant="h6" component="h1">opendevUI – Pantallas</Typography>
        <TextField
          size="small"
          fullWidth
          placeholder="Buscar…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          sx={{ mt: 1.5 }}
        />
        <List sx={{ mt: 1 }}>
          {filtered.map(name => (
            <ListItemButton
              key={name}
              selected={active === name}
              onClick={() => navigate(name)}
              sx={{ borderRadius: 1 }}
            >
              <ListItemText primary={name} />
            </ListItemButton>
          ))}
        </List>
      </Paper>
      <Box component="main" sx={{ bgcolor: 'background.default', overflow: 'auto' }}>
        <Box sx={{ p: 2 }}>
          <Active />
        </Box>
      </Box>
    </Box>
  );
}
