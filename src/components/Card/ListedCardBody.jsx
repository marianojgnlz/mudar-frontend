import React from 'react';

const ListedCardBody = ({ children }) => {
  return (
    <ul className="my-4 space-y-3 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 230px)' }}>
      {children}
    </ul>
  );
};

export { ListedCardBody };