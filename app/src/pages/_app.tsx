import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';

import '@/app/styles/index.css';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            keepPreviousData: true,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
});

function App({ Component, pageProps }: AppProps) {
    if (!Component) return;

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydrateQueries}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen />
            </Hydrate>
        </QueryClientProvider>
    );
}

export default App;
