import { memo, Suspense, type FC, type ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import logo from "/logo.svg";

const client = new QueryClient();

interface IProps {
  children: ReactNode;
}

const AppProvider: FC<IProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Suspense
            fallback={
              <div className="min-h-screen bg-black w-full grid place-items-center">
                <div className="size-[7%]">
                  <img
                    src={logo}
                    alt=""
                    className="w-full h-full animate-spin"
                  />
                </div>
              </div>
            }
          >
            {children}
          </Suspense>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default memo(AppProvider);
