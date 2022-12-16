"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./components/utils/AuthContext";
import { GlobalContextProvider} from "./components/utils/GlobalContext";
interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <AuthContextProvider>
      <GlobalContextProvider>
       <QueryClientProvider client={queryClient}>
        {children}
       <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
      </GlobalContextProvider>
    </AuthContextProvider>
  );
};
