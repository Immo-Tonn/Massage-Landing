import React from 'react';

import { classnames } from '@/utils/classnames';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  tag: Tag = 'a',
  accent = true,
  children,
  href,
  target,
  rel,
  buttonType,
  onClick,
  disabled = false,
  className,
}) => {
  const btnStyles = classnames(
    'cursor-pointer font-montserrat inline-block text-center tracking-[0.2px] text-sm xl:text-base',
    {
      'py-3 md:py-4 px-12 bg-accent text-white transition': accent === true,
      'hover:bg-hover focus:bg-hover active:bg-pressed': accent === true,
      'py-3 px-6 max-w-80 bg-transparent text-accent transition border border-solid border-accent xl:max-w-[190px]':
        accent === false,
      'hover:bg-transparentHover focus:bg-transparentHover active:bg-transparentPressed':
        accent === false,
    },
    className,
  );

  return (
    <Tag
      onClick={(e: React.MouseEvent) => {
        if (onClick) onClick();

        if (buttonType === 'submit' && onClick) onClick();
      }}
      href={href}
      target={target}
      rel={rel}
      type={buttonType}
      className={className ? `${btnStyles} ${className}` : btnStyles}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
};
