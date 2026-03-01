import React from 'react';

import { classnames } from '@/utils/classnames';

import { ModalPolicy } from '@/components/ui';

import { CheckBoxProps } from './types';

import contacts from '@/data/contacts.json';

export const CheckBox: React.FC<CheckBoxProps> = ({
  register,
  errors,
  checkboxInput,
}) => {
  return (
    <>
      <label
        className={classnames(
          'flex cursor-pointer items-start gap-[9px] font-montserrat text-[12px] font-normal not-italic leading-4 tracking-[0.2px] md:gap-2',
          errors?.checkbox ? 'text-error' : 'text-text',
        )}
      >
        <input
          type={contacts.checkBox.name}
          aria-label={contacts.checkBox.ariaLabel}
          {...register(contacts.checkBox.name, {
            required: true,
          })}
          className={classnames(
            'relative top-[2px] cursor-pointer appearance-none border-[1px] p-1.5',
            checkboxInput
              ? 'border-accent bg-accent'
              : 'border-borderCheckbox bg-footerBcg',
            errors?.checkbox && 'border-error',
          )}
        />
        {contacts.checkBox.label}
      </label>
      <ModalPolicy nameBtn={contacts.checkBox.conditionsLink} variant="form" />
    </>
  );
};
