import React from 'react';
import { ClipboardListIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <div className="header">
      <ClipboardListIcon className="lg-icon" />
      <h1>My Tasks</h1>
    </div>
  );
};

export default Header;
