import type { Metadata } from 'next';
import './globals.css';
import NavBar from './components/NavBar';

export const metadata: Metadata = {
  title: "CrossRoads '24",
  description: 'Techno cultural fest of MBCET'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full w-full bg-green font-poppins text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
