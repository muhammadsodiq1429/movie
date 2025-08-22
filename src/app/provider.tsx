import { memo, Suspense, type FC, type ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

interface IProps {
  children: ReactNode;
}

const AppProvider: FC<IProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Suspense fallback={<div>Suspense Loading...</div>}>
            {children}
          </Suspense>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default memo(AppProvider);
