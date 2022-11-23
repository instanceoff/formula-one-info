'use client';

import Link from 'next/link';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <div className='flex justify-center mt-2'>
        <div className='flex items-center max-w-7xl w-full'>
          <svg
            width='370'
            height='60'
            viewBox='0 0 240 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M96 22.4H175.1L197.5 0H93.9C65.4 0 57.7 3.4 42.2 18.1C27.1 33 0 60 0 60H33.8C41.5 52.5 55.8 38.7 62.3 32.5C71.5 23.8 76 22.4 96 22.4V22.4ZM203.9 0L143.9 60H180L240 0H203.9ZM171.4 26.1H98.8C76.6 26.1 72.8 27.3 63.3 36.8C54.4 45.7 40 60 40 60H71.5L79 52.5C83.9 47.6 86.5 47 96.8 47H150.5L171.4 26.1Z'
              fill='#EE0000'
            />
          </svg>
          <div className='w-full h-[3px] mx-4 rounded-full bg-[#EC1C24]'></div>
          <nav className='justify-self-end flex justify-between space-x-3 text-xl'>
            <Link className='text-[#F8D31E]' href={'/'}>
              STANDING
            </Link>
            <Link href={'/drivers'}>DRIVERS</Link>
            <Link href={'/teams'}>TEAMS</Link>
            {/* <button
              className='active:text-[#F8D31E]'
              onClick={() => testAddingItems()}
            >
              TEAMS
            </button> */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
