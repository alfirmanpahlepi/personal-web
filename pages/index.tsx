import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <>
      <main>
        <div className='h-[100vh] flex flex-col justify-center align-middle text-center'>
          <h1 className='text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-[#fcc] to-[#bada55] font-extrabold'>
            kencang parah nextjs 12
          </h1>
          <h2 className='text-2xl max-w-md mx-auto'>
            A Next.js Boilerplate with TypeScript, Tailwind CSS and testing
            suite enabled
          </h2>
        </div>
      </main>
    </>
  )
}

export default Home
