import { FC } from "react";
import Header from "../Header";

export interface IProps {
  children: JSX.Element;
}

const Layout: FC<IProps> = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
