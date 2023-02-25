import { Helmet } from "react-helmet-async";

export default function Layout({ children, title }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}
