import { ReactNode } from 'react';
import HeroImage from './HeroImage';
import Navigations from './Navigations';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const theme = 'linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)';

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{ background: theme }}
    >
      <div className="w-11/12 h-[550px] bg-white flex">
        <aside className="h-full w-[400px]">
          <HeroImage />
        </aside>
        <div className="h-full w-[calc(100%-400px)]">
          <nav className="h-[40px]">
            <Navigations />
          </nav>
          <main className="h-[calc(100%-40px)] overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
