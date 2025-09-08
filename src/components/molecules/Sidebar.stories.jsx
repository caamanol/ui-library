import React from 'react';
import Sidebar from './Sidebar.jsx';
import SearchBar from './SearchBar.jsx';
import Card from '../atoms/Card.jsx';

export default { title: 'Molecules/Sidebar', component: Sidebar };

export const WithSearchAndCards = {
  render: (args) => (
    <div style={{ height: 480, display: 'flex' }}>
      <Sidebar
        {...args}
        filter={<SearchBar placeholder="Filtrar…" value="" onChange={() => {}} />}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i}>
            <strong>Card #{i + 1}</strong>
            <div style={{ color: '#666' }}>Contenido del card</div>
          </Card>
        ))}
      </Sidebar>
      <div style={{ flex: 1 }} />
    </div>
  ),
  args: {
    width: 320,
  },
};

