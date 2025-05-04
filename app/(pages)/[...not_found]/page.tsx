import Link from 'next/link';
import Image from 'next/image';
import { PrimaryButton } from '@components';

export default function NotFound() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <h1>404</h1>
      <h3 className="mx-8">Oops..You are lost in space...</h3>
      <p className="mb-8">This page was not found...</p>
      <Image
        width={500}
        height={500}
        loading="eager"
        src={`/images/astro.png`}
        alt="astronaut"
        className="absolute top-[10%] right-0 hidden tablet:block tablet:w-[30rem] tablet:h-[30rem] desktop:w-[40rem] desktop:h-[40rem] rotate-[-50deg]"
      />
      <Link href="/" className="w-full text-center block">
        <PrimaryButton text="back home" />
      </Link>
    </main>
  );
}
