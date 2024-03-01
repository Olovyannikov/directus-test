import type { PropsWithChildren } from 'react';

export const PageTitle = ({ children }: PropsWithChildren) => (
    <h2 className='mb-6 text-2xl font-extrabold tracking-tight text-gray-900'>{children}</h2>
);
