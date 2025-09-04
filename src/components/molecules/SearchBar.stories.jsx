import React, { useState } from 'react';
import SearchBar from './SearchBar.jsx';

export default { title: 'Molecules/SearchBar', component: SearchBar };

export const Controlled = {
  render: () => {
    const [q, setQ] = useState('');
    return <SearchBar value={q} onChange={e => setQ(e.target.value)} />;
  }
};

