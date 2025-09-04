import React, { useState } from 'react';
import Pagination from './Pagination.jsx';

export default { title: 'Molecules/Pagination', component: Pagination };

export const Controlled = {
  render: () => {
    const [page, setPage] = useState(2);
    return <Pagination current={page} totalPages={5} onChange={setPage} />;
  }
};

