import { Helmet } from "react-helmet-async";

import NavBar from "./Navbar";
import Footer from "./Footer";

export default function Layout({
  children,
  title,
  showNavbar = false,
  showFooter = false,
}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {showNavbar && <NavBar />}
      {children}
      {showFooter && <Footer />}
    </>
  );
}
