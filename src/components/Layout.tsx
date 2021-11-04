import { ReactNode, useEffect, useRef } from 'react';
import HeroImage from './HeroImage';
import Navigations from './Navigations';
import { motion } from "framer-motion"
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { asPath } = useRouter();
  const theme: string = 'linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)';
  const mainRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 1280px)') && asPath !== "/") {
      const layoutScrollHeight: number = layoutRef.current?.scrollHeight || 0;
      const mainScrollHeight: number = mainRef.current?.scrollHeight || 0;
      window.scroll({
        top: layoutScrollHeight - mainScrollHeight,
        behavior: 'smooth'
      });
    }
  }, [])

  return (
    <div
      ref={layoutRef}
      className="min-h-screen flex justify-center items-center px-1 xs:px-3"
      style={{ background: theme }}
    >
      <div className="w-full sm:w-11/12 xl:w-[1173.33px] min-h-screen sm:min-h-full lg:h-[550px] bg-white lg:flex lg:rounded-lg overflow-hidden">
        <aside className="h-[480px] sm:h-[640px] lg:h-full lg:w-[400px]">
          <HeroImage />
        </aside>
        <div ref={mainRef} className="h-full lg:w-[calc(100%-400px)]">
          <nav className="h-[40px]">
            <Navigations />
          </nav>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-[calc(100%-40px)] overflow-auto">
            {children}
          </motion.main>
        </div>
      </div>
    </div>
  );
}