import Head from "next/head";
import Image from 'next/image';

import logo from '../../public/assets/hero.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Organize your tasks!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex bg-black h-[calc(100vh-80px)] w-full justify-center items-center flex-col">
        <div className="flex justify-center">
          <Image
            className="object-contain w-auto h-auto max-w-md sm:max-w-[80%]"
            alt='hero'
            src={logo}
            priority
          />
        </div>
        <h1 className="text-4xl font-bold flex-wrap w-1/2 text-center mx-7 leading-[150%] my-8 sm:text-2xl sm:w-4/5 md:my-6">Sistema perfeito para organização de tarefas!</h1>
        <div className="flex justify-evenly w-1/2 sm:flex-col sm:w-4/5 md:w-2/3">
          <section className="py-4 px-12 bg-white text-black rounded transition-transform duration-[0.2s] hover:scale-[1.08] sm:w-full sm:mb-4 md:py-3 md:px-10 cursor-pointer">
            <span>
              +12 posts
            </span>
          </section>
          <section className="py-4 px-12 bg-white text-black rounded transition-transform duration-[0.4s] hover:scale-[1.08] sm:w-full sm:mb-4 cursor-pointer">
            <span>
              +90 comentários
            </span>
          </section>
        </div>

      </main>
    </>
  );
}
