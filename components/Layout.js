import Head from "next/head";
import Link from "next/Link";
const Layout = ({ children, title = "Crypto Tracker" }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a>Crypto</a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
