import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => (
  <div className="min-h-screen bg-deep-bg text-text-primary">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
