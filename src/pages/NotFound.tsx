import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => (
  <div className="pt-16">
    <section className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="max-w-lg mx-auto px-6 text-center">
        <p className="text-sm text-accent uppercase tracking-wider mb-2">404 Error</p>
        <h1 className="text-6xl sm:text-7xl font-black text-text-primary mb-4">Lost?</h1>
        <p className="text-zinc-400 mb-8">
          This page doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-deep-bg font-semibold hover:bg-accent-hover transition-colors"
        >
          <ArrowLeft size={20} />
          Back Home
        </Link>
      </div>
    </section>
  </div>
);

export default NotFound;
