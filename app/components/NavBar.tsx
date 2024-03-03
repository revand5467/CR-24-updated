import Image from 'next/image';
import React from 'react';

export default function NavBar() {
  return (
    <nav className="absolute top-0 flex w-full justify-between border-b border-gray p-4 md:px-10">
      <Image src="/logo_small.svg" alt="CR 24 logo" width={30} height={30} />
      <div className="flex items-center gap-3 md:gap-7">
        <a className="text-sm" href="">
          Sponsors
        </a>
        <a className="text-sm" href="">
          Buy Merch
        </a>
        <button className="rounded-md bg-pink px-4 py-2 text-sm">Events</button>
      </div>
    </nav>
  );
}
