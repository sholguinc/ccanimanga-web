import React from 'react'
import Image from 'next/image'

export const Title = () => {
  return (
    <div className='xl:container mx-auto overflow-y-hidden
    lg:h-96
    md:h-72
    xsm:h-60'>
      <h1 className='relative h-full m-0'>
        <figure className='m-0'>
          <Image
            src='/images/aboutUs/cocoPrueba.jpg'
            layout='fill'
            objectFit='cover'
            alt=''
          />
        </figure>
        <div className='absolute w-full h-full flex items-center justify-center'>
          <p className='font-myFont font-bold text-2xl
          lg:text-5xl
          md:text-4xl
          xsm:text-3xl'>
            Acerca de Nosotros
          </p>
        </div>
      </h1>
    </div>
  )
}
