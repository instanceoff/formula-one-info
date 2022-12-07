'use client';

interface DropdownProps {
  variants: {
    name: string;
    link?: string;
    onClick?: () => {};
  }[];
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ variants, children }) => {
  return <>{children}</>;
};

export default Dropdown;
