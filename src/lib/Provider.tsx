"use client";
import StyledComponentsRegistry from "./AntdRegistry";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "react-hot-toast";

type ProviderProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>
        {children}
        <Toaster />
      </StyledComponentsRegistry>
    </Provider>
  );
};
export default Providers;
