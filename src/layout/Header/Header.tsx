'use client';

import { useEffect, useState } from 'react';
import { classnames } from '@/utils/classnames';
import { Logo } from '@/components/ui/Logo';
import { Navbar } from '@/components/ui/Navbar';
import BurgerMenuIcon from '@/../public/icons/burger-menu.svg';
import { BurgerMenu } from '@/components/ui/BurgerMenu';

import { useLanguage } from '@/utils/LanguageContext';
import { getData } from '@/utils/getData';

export function Header() {
  const { lang, setLang } = useLanguage();

  const [common, setCommon] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const data = await getData('common', lang);
      setCommon(data);
    };

    loadData();
  }, [lang]);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 50);

      if (current > lastScroll && current > 150) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      lastScroll = current;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const languages = ['ua', 'en', 'de'];

  if (!common) return null;

  return (
    <header
      className={classnames(
        'fixed left-0 top-0 z-[999] w-full',
        'border-b border-yellow-200 backdrop-blur-2xl transition-all duration-700',
        hideHeader
          ? 'translate-y-[-100%] opacity-0'
          : 'translate-y-0 opacity-100',
        scrolled ? 'bg-black/20 py-6 shadow-xl' : 'bg-black/10 py-5',
      )}
    >
      <div className="container relative flex items-center justify-between xl:gap-[100px]">
        {/* LOGO */}
        <Logo path="header" onClick={closeMenu} />

        {/* NAVIGATION */}
        <Navbar
          variant="header"
          className="hidden transition-all duration-300 xl:flex"
        />

        {/* LANGUAGE SWITCHER */}
        <div className="relative hidden items-center font-montserrat text-[15px] tracking-[0.25em] xl:flex">
          {languages.map((l, index) => (
            <div key={l} className="flex items-center">
              <button
                onClick={() => setLang(l as 'ua' | 'en' | 'de')}
                className={classnames(
                  'relative px-2 transition-colors duration-300',
                  lang === l
                    ? 'font-semibold text-yellow-300'
                    : 'text-yellow-200/80 hover:text-yellow-300',
                )}
              >
                {l.toUpperCase()}
              </button>

              {index < languages.length - 1 && (
                <span className="mx-2 select-none text-yellow-200/50">|</span>
              )}
            </div>
          ))}
        </div>

        {/* BURGER BUTTON */}
        <button
          onClick={openMenu}
          aria-label={common.layout['aria-label'].burger}
          className="transition-all duration-300 hover:scale-125 active:scale-95 xl:hidden"
        >
          <BurgerMenuIcon width={32} height={32} />
        </button>
      </div>

      {/* BURGER MENU */}
      {isOpen && <BurgerMenu isOpen={isOpen} onClose={closeMenu} />}
    </header>
  );
}
