import { useEffect, useRef } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { motion } from "framer-motion"
import HeroImage from '@/components/HeroImage';
import Navigations from '@/components/Navigations';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {

  const { asPath } = useRouter()
  const layoutRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  const background: string = 'linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)';

  const colors = (): string[] => {
    let arr = [];
    for (let i = 45; i <= 360; i += 45) {
      arr.push(`linear-gradient(${i}deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)`)
    }
    return arr
  }

  useEffect(() => {
    if (window.matchMedia('(max-width: 1280px)') && asPath !== "/") {
      const layoutScrollHeight: number = layoutRef.current?.scrollHeight || 0;
      const mainScrollHeight: number = mainRef.current?.scrollHeight || 0;
      window.scroll({
        top: layoutScrollHeight - mainScrollHeight,
        behavior: 'smooth'
      });
    }
  }, [asPath])

  return (
    <motion.div
      ref={layoutRef}
      initial={{ background }}
      animate={{
        background: colors(),
        transition: {
          duration: 50,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }}
      className="min-h-screen flex justify-center items-center px-1 xs:px-3"
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
            <Component {...pageProps} />
          </motion.main>
        </div>
      </div>
    </motion.div>
  );
}

export default MyApp;
