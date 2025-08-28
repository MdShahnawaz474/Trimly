import { BackgroundBeams } from '@/components/ui/background-beams';
import React from 'react'

export default function layout({
    children
}: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className='min-h-screen w-full bg-black relative'>
        <BackgroundBeams/>
         {children}
      </div>
      );
}
