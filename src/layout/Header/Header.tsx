'use client';
import { useState } from 'react';

import { BurgerMenu, Navbar, Logo } from '@/components/ui';

import BurgerMenuIcon from '@/../public/icons/burger-menu.svg';

import common from '@/data/common.json';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className="w-full py-[22px]">
      <div className="container flex items-center xl:gap-[100px] notXL:justify-between">
        <Logo path="header" onClick={handleClose} />
        <Navbar variant="header" className="smOnly:hidden mdOnly:hidden" />
        <button
          type="button"
          className="block transition hover:scale-110 hover:text-hover focus-visible:text-pressed xl:hidden"
          aria-label={common.layout['aria-label'].burger}
          onClick={handleOpen}
        >
          <BurgerMenuIcon width={32} height={32} />
        </button>
        {isOpen && <BurgerMenu isOpen={isOpen} onClose={handleClose} />}
      </div>
    </header>
  );
};
