import { useEffect, useState } from 'react';
import Head from 'next/head';
import IE from './IE';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

const links = [
  {
    key: "about",
    href: "/about",
    label: "About",
  },
  {
    key: "projects",
    href: "/projects",
    label: "Projects",
  },
  {
    key: "resume",
    href: "/resume",
    label: "Résumé",
  },
  {
    key: "contact",
    href: "/contact",
    label: "Contact",
  },
];

const Layout = ({ title, description, children }) => {
  const [isIE, setIsIE] = useState(false);

  useEffect(() => {
    setIsIE(/*@cc_on!@*/false || !!document.documentMode);
  }, []);

  return (<div>
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Head>
    <Header links={links} />
    <Content>
      {isIE ? <IE /> : children}
    </Content>
    <Footer />
  </div>);
};

export default Layout;
