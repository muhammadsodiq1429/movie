import { memo } from "react";
import AppProvider from "./provider";
import AppRoutes from "./routes";

const App = () => {
  return (
    <AppProvider>
      <AppRoutes></AppRoutes>
    </AppProvider>
  );
};

export default memo(App);
