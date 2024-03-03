import Image from 'next/image';
import React from 'react';

export default function NavBar() {
  return (
    <nav className="border-b-2 border-gray p-4 md:px-10 flex justify-between">
      <Image src="/logo_small.svg" alt="CR 24 logo" width={30} height={30} />
      <div className="flex items-center gap-3 md:gap-7">
        <a className="text-sm" href="">
          Sponsors
        </a>
        <a className="text-sm" href="">
          Buy Merch
        </a>
        <button className="text-sm bg-pink px-4 py-2 rounded-md">Events</button>
      </div>
    </nav>
  );
}
