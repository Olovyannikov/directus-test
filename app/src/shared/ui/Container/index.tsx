import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>{children}</div>;
