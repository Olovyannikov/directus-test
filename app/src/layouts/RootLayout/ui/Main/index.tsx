import { ComponentProps } from 'react';

export function Main({ children, ...props }: ComponentProps<'main'>) {
    return <main {...props}>{children}</main>;
}
