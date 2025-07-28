'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@components';

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Determine if we're on the homepage
  const isProjectPage = pathname.includes('/work/');

  return (
    <Header
      className={isProjectPage ? 'bg-transparent absolute' : 'bg-white sticky'}
      textColor={isProjectPage ? 'white' : 'black'}
    />
  );
}
