import type { ComponentProps } from 'react';

import type { Maybe } from '@/services/generated';

interface CheckboxProps extends ComponentProps<'input'> {
    label?: Maybe<string>;
}

export const Checkbox = ({ label, ...props }: CheckboxProps) => (
    <label className='inline-flex items-center mt-3 mr-3'>
        <input type='checkbox' className='h-5 w-5' {...props} />
        <span className='ml-2 text-gray-700'>{label}</span>
    </label>
);
