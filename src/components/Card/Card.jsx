import React from 'react';
import { CardHeader } from './CardHeader';
import { ListedCardBody } from './ListedCardBody';
import { CardFooter } from './CardFooter';

function Card({ children }) {
  return (
    <div className="w-full h-screen p-4 border border-gray-200 shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>

  );
}

export { Card, CardHeader, ListedCardBody, CardFooter };