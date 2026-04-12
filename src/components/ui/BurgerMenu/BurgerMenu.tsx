'use client';

import { useEffect, useRef, useState } from 'react';

import { Logo, Socials, Navbar } from '@/components/ui';
import CloseIcon from '@/../public/icons/close-icon.svg';
import { IBurgerMenuProps } from './types';

import { useLanguage } from '@/utils/LanguageContext';
import { getData } from '@/utils/getData';

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ isOpen, onClose }) => {
  const { lang, setLang } = useLanguage();

  const [common, setCommon] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getData('common', lang);
      setCommon(data);
    };

    loadData();
  }, [lang]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

  if (!common) return null;

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full overscroll-none bg-black/40 backdrop-blur-xl xl:hidden">
      <div
        className="mx-auto flex h-[45vh] w-[250px] flex-col rounded-xl bg-[#1a130f] shadow-[0_10px_40px_rgba(232,213,156,0.15)]"
        ref={modalRef}
      >
        <div className="flex justify-between px-5 py-[22px] md:px-8 md:py-6">
          <Logo path="header" onClick={onClose} />

          <button
            onClick={onClose}
            aria-label={common.layout['aria-label'].btnClose}
            className="duration-250 transform transition hover:scale-110"
          >
            <CloseIcon width={24} height={24} />
          </button>
        </div>

        <div className="flex h-full flex-col justify-between px-8 py-10 md:py-[60px]">
          {/* NAVIGATION */}
          <nav className="mb-auto self-start">
            <Navbar variant="mobile-menu" onClick={handleLinkClick} />
          </nav>

          {/* LANGUAGE SWITCH */}
          <div className="mb-6 flex gap-4 self-start font-montserrat text-[15px] tracking-[0.25em]">
            {['ua', 'en', 'de'].map(l => (
              <button
                key={l}
                onClick={() => setLang(l as 'ua' | 'en' | 'de')}
                className={`
                  transition-colors duration-300
                  ${
                    lang === l
                      ? 'font-semibold text-yellow-300'
                      : 'text-yellow-200/80 hover:text-yellow-300'
                  }
                `}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* SOCIALS */}
          <div className="self-start md:self-start">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};
