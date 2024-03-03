import Image from 'next/image';
import LogoLanding from '../public/logo_landing.svg';
import Tiger from '../public/tiger.png';
import CountdownTimer from './components/Countdown';
import Marquee from 'react-fast-marquee';
import CollegeAnimate from './components/CollegeAnimate';

export default function Home() {
  return (
    <main className="">
      <section
        id="landing"
        className="flex  min-h-[85vh] w-full flex-col py-10 pt-[90px]"
      >
        <div className="flex flex-1 flex-col items-center justify-center py-6 sm:flex-row sm:gap-10">
          <Image
            className="w-[200px] max-w-[300px] rotate-90 object-contain sm:w-[200px] sm:rotate-0 md:w-[200px] lg:w-[300px]"
            src={Tiger}
            alt="tiger image"
          />
          <Image
            className="w-[200px] max-w-[300px] object-contain md:w-[200px] lg:w-[300px]"
            src={LogoLanding}
            alt="logo image"
          />
          <Image
            className="w-[200px] max-w-[300px] rotate-90 scale-x-[-1] object-contain sm:w-[200px] sm:rotate-0 md:w-[200px] lg:w-[300px]"
            src={Tiger}
            alt="tiger image"
          />
        </div>
        <CountdownTimer />
      </section>
      <Marquee autoFill className="flex gap-3 border-y border-gray py-4">
        <div className="mx-5 h-3 w-3 rounded-full bg-pink" />
        <p className="text-xl">Techno-cultural fest of MBCET</p>
        <div className="mx-5 h-3 w-3 rounded-full bg-pink" />
        <p className="text-xl">#ChromaticChaos</p>
      </Marquee>
      <section className="relative mt-11 flex  flex-col items-center justify-between">
        <div className="flex h-full flex-1 flex-col items-center justify-end">
          <h1 className="heading">OUR LEGACY</h1>
          <h2 className="heading flex gap-1 text-3xl text-white">
            2005 - <Image width={60} height={60} src="/infinity.svg" alt="infinity" />
          </h2>
          <p className="prose mt-6 text-center text-white">
            The Techno-Cultural festival of MBCET aka, Crossroads has become an integral
            part of the cultural calendar of Trivandrum since its launch in 2005. From
            there it&rsquo;s centered to bring together students from different
            backgrounds and cultures to celebrate their shared passion for creativity and
            innovation.
          </p>
        </div>
        <CollegeAnimate />

        <Image
          src="/wave.png"
          alt=""
          width={1080}
          height={1080}
          className="absolute  bottom-0 z-[1] w-full "
        />
      </section>

      <section className=" relative flex  min-h-screen items-center justify-center ">
        <div className="relative flex h-[700px] w-[70%] items-center justify-center ">
          <Image
            src="/legacy.png"
            alt=""
            width={1080}
            height={1080}
            className="duraction-[3000] absolute left-0 top-0 h-[300px] w-[300px] animate-spin"
            style={{ animationDuration: '4s' }}
          />
          <div className="z-[1] h-[200px] w-[100vw] md:h-[400px] md:w-[50vw] ">
            <iframe
              className="h-full w-full rounded-xl "
              src="https://www.youtube.com/embed/QaXcVAkamxc"
              title="CROSSROADS&#39;23 | After Movie | Mar Baselios College of Engineering and Technology"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <Image
            src="/legacy.png"
            alt=""
            width={1080}
            height={1080}
            className="duraction-[3000] absolute bottom-0 right-0 h-[300px] w-[300px] animate-spin"
            style={{ animationDuration: '4s' }}
          />
        </div>
        <Image
          src="/wave.png"
          alt=""
          width={1080}
          height={1080}
          className="absolute bottom-0 z-[1] w-full rotate-180"
        />
      </section>
    </main>
  );
}
