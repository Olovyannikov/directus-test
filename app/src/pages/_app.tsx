import {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const App = ({Component, pageProps}: AppProps) => {
    if (!Component) return;

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps}/>
        </QueryClientProvider>
    )
}

export default App;