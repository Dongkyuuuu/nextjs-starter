import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Globals, NormalizeCss } from "@/components/Common/Styles";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Globals />
        <NormalizeCss />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
