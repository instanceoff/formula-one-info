'use client';

import { createContext, useContext, useState } from 'react';

const DropdownContext = createContext({
  isOpen: false,
  setIsOpen: (state: boolean) => {},
});

export interface DropdownProps {
  children: React.ReactNode;
}

export const DropdownButton: React.FC<DropdownProps> = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
    </>
  );
};

export const DropdownContent: React.FC<DropdownProps> = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  return (
    <>
      <div className={`${isOpen || 'hidden'}`}>{children}</div>
    </>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </DropdownContext.Provider>
    </>
  );
};

export default Dropdown;
