import type { PropsWithChildren } from 'react';
import Head from 'next/head';

import { Main } from './ui';

interface RootLayoutProps {
    title: string;
}

export function RootLayout({ children, title }: PropsWithChildren<RootLayoutProps>) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Main>{children}</Main>
        </>
    );
}
