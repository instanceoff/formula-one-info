'use client';

import { IDriver } from '../types/formulaModels';
import { useState } from 'react';

interface DropdownProps {
  driver: IDriver;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const DropdownContent = () => {
    return (
      <>
        <div className={`${isOpen || 'hidden'}`}>{children}</div>
      </>
    );
  };

  const DropdownButton: React.FC<DropdownProps> = () => {
    return (
      <>
        <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      </>
    );
  };

  return <>{children}</>;
};

export default Dropdown;
