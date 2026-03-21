import React from 'react';
import { Link } from 'react-router-dom';

export const BrandText = () => {
  return (
    <Link 
      to="/" 
      className="text-xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-sm"
    >
      WWJD.com
    </Link>
  );
};