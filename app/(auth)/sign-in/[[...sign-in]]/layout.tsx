import { BackgroundBeams } from '@/components/ui/background-beams';
import React from 'react'

export default  function layout({
    children
}: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className='h-screen w-full rounded-md  bg-black relative flex flex-col items-center justify-center antialiased'>
         <BackgroundBeams/>
         {children}
      </div>
      );
}
