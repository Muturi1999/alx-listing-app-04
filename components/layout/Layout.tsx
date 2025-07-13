// import Header from "./Header";
// import Footer from "./Footer";
// import { ReactNode } from "react";

// const Layout = ({ children }: { children: ReactNode }) => {
//   return (
//     <>
//       <Header />
//       <main className="min-h-screen px-4 md:px-16 lg:px-24 py-8 bg-gray-50">
//         {children}
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Layout;
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;