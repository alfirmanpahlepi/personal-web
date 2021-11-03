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
      className="min-h-screen flex justify-center items-center px-1 xs:px-3"
      style={{ background: theme }}
    >
      <div className="w-full sm:w-11/12 xl:w-[1173.33px] min-h-screen sm:min-h-full lg:h-[550px] bg-white lg:flex lg:rounded-lg overflow-hidden">
        <aside className="h-[480px] sm:h-[640px] lg:h-full lg:w-[400px]">
          <HeroImage />
        </aside>
        <div className="h-full lg:w-[calc(100%-400px)]">
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
