import type {AppProps} from "next/app";
import {Hydrate, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();

const App = ({Component, pageProps}: AppProps) => {
    if (!Component) return;

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydrateQueries}>
                <Component {...pageProps}/>
                <ReactQueryDevtools initialIsOpen/></Hydrate>
        </QueryClientProvider>
    )
}

export default App;